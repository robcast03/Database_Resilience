from flask import Flask, render_template,jsonify,request, Response
from class_firebase_database import FirebaseDB
import cv2
import requests
app=Flask(__name__)
camera = cv2.VideoCapture(0)
path ="basededatosprueva-79653-firebase-adminsdk-uu60k-78a8daca61.json"
url = "https://basededatosprueva-79653-default-rtdb.firebaseio.com/"
fb_db = FirebaseDB(path,url)

# URL a la que enviar el video



def gen_frames(): 
    camera = cv2.VideoCapture(0) 
    camera.set(cv2.CAP_PROP_FRAME_WIDTH,80)
    camera.set(cv2.CAP_PROP_FRAME_HEIGHT,80)
    while True:
        success, frame = camera.read()  # read the camera frame
        if not success:
            break
        else:
            detector=cv2.CascadeClassifier('Haarcascades/haarcascade_frontalface_default.xml')
           
            faces=detector.detectMultiScale(frame,1.1,7)
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
             #Draw the rectangle around each face
            for (x, y, w, h) in faces:
                cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
                cv2.putText(frame, 'planta', (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2,
                    cv2.LINE_AA) 
                roi_gray = gray[y:y+h, x:x+w]
                roi_color = frame[y:y+h, x:x+w]
                

            ret, buffer = cv2.imencode('.jpg', frame)
            frame = buffer.tobytes()
            # Enviar el frame a la URL especificada
            
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            
@app.route('/receive_data', methods=['POST'])
def receive_data():
    data = request.json
    print("Datos recibidos desde el cliente:")
    for key, value in data.items():
        print(key + ":", value)
         # Obtener los ángulos del JSON recibido
    angulo1 = float(data.get('angulo1')) if data.get('angulo1') is not None else 0
    angulo2 = float(data.get('angulo2')) if data.get('angulo2') is not None else 0
    angulo3 = float(data.get('angulo3')) if data.get('angulo3') is not None else 0
    angulo4 = float(data.get('angulo4')) if data.get('angulo4') is not None else 0
    angulo5 = float(data.get('angulo5')) if data.get('angulo5') is not None else 0
    print(angulo1,angulo2,angulo3,angulo4,angulo5)
    # Guardar los ángulos en la base de datos de Firebase
    datos_valores={
        'angulo1': angulo1,
        'angulo2': angulo2,
        'angulo3': angulo3,
        'angulo4': angulo4,
        'angulo5': angulo5

    }
    print("Valores de los ángulos que se van a enviar:", datos_valores)


    fb_db.write_record('/angulosBrazo/angulos', datos_valores)
    
   
    return jsonify({'message': 'Datos recibidos correctamente'})
@app.route('/')
def index():
  
    return render_template('joybrazo.html')
@app.route('/video_feed')
def video_feed():
    
    return Response(gen_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')
@app.route('/ejecutar_codigo', methods=['POST'])
def ejecutar_codigo():
    # Aquí puedes colocar el código de Python que deseas ejecutar al presionar el botón
    print("Código de Python ejecutado")
    return "Código de Python ejecutado con éxito"
if __name__=='__main__':
  app.run(host='127.0.0.8',port=5000, debug=True)
