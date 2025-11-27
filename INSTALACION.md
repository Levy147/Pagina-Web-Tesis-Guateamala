# Guía de Instalación - Tesis Galeano

## 📦 Pasos para Instalar y Ejecutar el Proyecto

### 1. Instalar Dependencias del Proyecto Principal

```bash
npm install
```

### 2. Instalar Dependencias del Frontend

```bash
cd frontend
npm install
cd ..
```

### 3. Instalar Dependencias del Backend

```bash
cd backend
npm install
cd ..
```

### 4. Configurar Variables de Entorno del Backend

Crea un archivo `.env` en la carpeta `backend/` con el siguiente contenido:

```
PORT=3001
NODE_ENV=development
```

### 5. Ejecutar el Proyecto en Modo Desarrollo

Desde la raíz del proyecto, ejecuta:

```bash
npm run dev
```

Esto iniciará:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3001

### 6. Verificar que Todo Funciona

1. Abre tu navegador en http://localhost:3000
2. Deberías ver la página principal de Tesis Galeano
3. Prueba el formulario de contacto para verificar que el backend funciona

## 🔧 Solución de Problemas

### Error: "Cannot find module"
- Asegúrate de haber ejecutado `npm install` en todas las carpetas (raíz, frontend, backend)

### Error: "Port already in use"
- Cambia el puerto en el archivo `.env` del backend o cierra la aplicación que está usando el puerto

### El formulario no envía datos
- Verifica que el backend esté corriendo en el puerto 3001
- Revisa la consola del navegador para ver errores
- Verifica que la variable `NEXT_PUBLIC_API_URL` esté configurada correctamente

## 📝 Notas Importantes

- El backend guarda los contactos en memoria (se pierden al reiniciar)
- Para producción, considera usar una base de datos real (MongoDB, PostgreSQL)
- Los logos de universidades deben colocarse en `frontend/public/logos/`
- Actualiza el enlace de Facebook cuando lo tengas disponible

## 🚀 Próximos Pasos

1. Subir los logos de las universidades a `frontend/public/logos/`
2. Configurar el enlace de Facebook en los componentes
3. Personalizar el contenido según tus necesidades
4. Configurar dominio y hosting para producción

