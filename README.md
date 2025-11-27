# Tesis Galeano - Sitio Web

Sitio web profesional para asesoría de estudiantes universitarios en procesos de tesis y elaboración de tareas académicas.

## 🚀 Características

- **Frontend**: Next.js 14 con TypeScript y Tailwind CSS
- **Backend**: Node.js con Express
- **SEO**: Optimizado para motores de búsqueda
- **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- **Integración WhatsApp**: Redireccionamiento directo a WhatsApp
- **Formulario de Contacto**: Sistema completo de recepción de solicitudes

## 📋 Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

## 🛠️ Instalación

1. **Instalar dependencias del proyecto raíz:**
```bash
npm install
```

2. **Instalar dependencias del frontend:**
```bash
cd frontend
npm install
```

3. **Instalar dependencias del backend:**
```bash
cd ../backend
npm install
```

4. **Configurar variables de entorno:**
```bash
# En la carpeta backend, copia el archivo .env.example y crea .env
cd backend
cp .env.example .env
```

Edita el archivo `.env` según tus necesidades:
```
PORT=3001
NODE_ENV=development
```

## 🎯 Uso

### Desarrollo

Para ejecutar tanto el frontend como el backend simultáneamente:

```bash
npm run dev
```

Esto iniciará:
- Frontend en: http://localhost:3000
- Backend en: http://localhost:3001

### Solo Frontend

```bash
npm run dev:frontend
```

### Solo Backend

```bash
npm run dev:backend
```

### Producción

1. **Construir el frontend:**
```bash
cd frontend
npm run build
npm start
```

2. **Iniciar el backend:**
```bash
cd backend
npm start
```

## 📁 Estructura del Proyecto

```
.
├── frontend/          # Aplicación Next.js
│   ├── app/          # Páginas y layouts
│   ├── components/   # Componentes React
│   └── ...
├── backend/          # API Express
│   ├── server.js     # Servidor principal
│   └── ...
├── public/           # Archivos estáticos (logos de universidades)
└── package.json      # Scripts principales
```

## 🎨 Personalización

### Logos de Universidades

Crea una carpeta `frontend/public/logos/` y sube los logos de las universidades. Luego puedes referenciarlos en los componentes.

### Colores

Los colores están definidos en `frontend/tailwind.config.js`:
- Primary Dark: #0d0630
- Primary Blue: #156fb0
- Primary Light: #608ba2
- Primary Cream: #fffcf7
- Primary Cyan: #97f9f9

### WhatsApp

El enlace de WhatsApp está configurado en:
- `frontend/components/Header.tsx`
- `frontend/components/ContactForm.tsx`
- `frontend/components/Footer.tsx`

Actualiza el número si es necesario: `https://wa.me/50258203956`

### Facebook

El enlace de Facebook está configurado como `#` (placeholder). Actualiza en los mismos archivos cuando tengas el enlace.

## 📝 API Endpoints

### POST /api/contact
Recibe formularios de contacto.

**Body:**
```json
{
  "nombre": "string",
  "universidad": "string",
  "pais": "string",
  "carrera": "string",
  "proceso": ["string"],
  "telefono": "string",
  "codigoPais": "string",
  "descripcion": "string"
}
```

### GET /api/contacts
Obtiene todos los contactos (solo para desarrollo/admin).

### GET /api/health
Verifica el estado del servidor.

## 🔒 Notas de Seguridad

- En producción, implementa validación más robusta
- Considera usar una base de datos real (MongoDB, PostgreSQL)
- Implementa rate limiting
- Agrega autenticación para endpoints administrativos
- Configura CORS apropiadamente para producción

## 📄 Licencia

Este proyecto es privado y está destinado para uso del negocio Tesis Galeano.

