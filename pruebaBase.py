import socket
import json



# Configuración del servidor
HOST = '127.0.0.1'  # Dirección IP del servidor
PORT = 5000       # Puerto para la conexión con el servidor Flask

# Función para procesar los datos recibidos
def procesar_datos(data):
    
    print("Datos recibidos:")
    print(data)

# Configurar el servidor
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()

    print("Servidor esperando conexión...")
    conn, addr = s.accept()
    with conn:
        print('Conexión establecida desde', addr)
        # Recibir y procesar los datos
        data = conn.recv(1024).decode()
        data_dict = json.loads(data)
        procesar_datos(data_dict)





