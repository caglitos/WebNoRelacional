#!/bin/bash

# Configuración
DB_PATH="/data/db"  # Ruta donde MongoDB guarda los datos
LOG_PATH="/var/log/mongodb/mongod.log"  # Ruta del archivo de logs
IP="127.0.0.1"  # IP de conexión (usar 127.0.0.1, no 'localhost')

# Detener MongoDB si está en ejecución
echo "🔹 Deteniendo MongoDB si está en ejecución..."
sudo pkill -f mongod

# Crear directorios si no existen
sudo mkdir -p "$DB_PATH" "$(dirname "$LOG_PATH")"

# Asignar permisos (evitar errores de permisos)
sudo chown -R $USER "$DB_PATH" "$(dirname "$LOG_PATH")"

# Verificar si MongoDB ya está en ejecución
if ! sudo lsof -i :2701 > /dev/null; then
    echo "🔹 Iniciando MongoDB en $DB_PATH..."
    sudo mongod --dbpath "$DB_PATH" --bind_ip "$IP" --fork --logpath "$LOG_PATH"
    
    # Verificar si se inició correctamente
    if [ $? -eq 0 ]; then
        echo "✅ MongoDB iniciado correctamente en $IP:27017"
        echo "🔹 Logs: $LOG_PATH"
    else
        echo "❌ Error al iniciar MongoDB. Revisa los logs: $LOG_PATH"
        exit 1
    fi
else
    echo "🔹 MongoDB ya está en ejecución (puerto 27017)."
fi