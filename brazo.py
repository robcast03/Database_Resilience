from flask import Flask, render_template,jsonify,request, Response
from class_firebase_database import FirebaseDB


app=Flask(__name__)

path ="basededatosprueva-79653-firebase-adminsdk-uu60k-78a8daca61.json"
url = "https://basededatosprueva-79653-default-rtdb.firebaseio.com/"
fb_db = FirebaseDB(path,url)
# Configuración de la conexión a la base de datos MySQL


# Función para conectar a la base de datos MySQL y guardar los datos
  
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

    # Guardar los ángulos en la base de datos de Firebase
    datos_valores={
        'angulo1': angulo1,
        'angulo2': angulo2,
        'angulo3': angulo3,
        'angulo4': angulo4,
        'angulo5': angulo5
    }
    fb_db.write_record('/angulosBrazo', datos_valores)
    data=fb_db.read_record('angulosBrazo')
    print("Read Data:", data)
    return jsonify({'message': 'Datos recibidos correctamente'})

@app.route('/')
def index():
  
    return render_template('brazo.html',)

@app.route('/ejecutar_codigo', methods=['POST'])
def ejecutar_codigo():
    # Aquí puedes colocar el código de Python que deseas ejecutar al presionar el botón
    print("Código de Python ejecutado")
    return "Código de Python ejecutado con éxito"
if __name__=='__main__':
    app.run(host='127.0.0.7',port=5000, debug=True)