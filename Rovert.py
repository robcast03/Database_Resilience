
from flask import Flask, render_template,jsonify,request, Response
from class_firebase_database import FirebaseDB

app=Flask(__name__)

path ="basededatosprueva-79653-firebase-adminsdk-uu60k-78a8daca61.json"
url = "https://basededatosprueva-79653-default-rtdb.firebaseio.com/"
fb_db = FirebaseDB(path,url)
datos_mapa={
        'lat': -75.5,
        'lon': 4.8,
    }
print("Valores de los ángulos que se van a enviar:", datos_mapa)


fb_db.write_record('/Mapa/Cordenadas', datos_mapa)
    
 
@app.route('/')
def index():
   

    return render_template('Roverto.html')

@app.route('/ejecutar_codigo', methods=['POST'])
def ejecutar_codigo():
    # Aquí puedes colocar el código de Python que deseas ejecutar al presionar el botón
    print("Código de Python ejecutado")
    return "Código de Python ejecutado con éxito"

if __name__=='__main__':
    app.run(host='127.0.0.9',port=5000, debug=True)