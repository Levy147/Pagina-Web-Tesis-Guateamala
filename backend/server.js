const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Simulación de base de datos (en producción usar MongoDB, PostgreSQL, etc.)
let contacts = [];

// Ruta para recibir formularios de contacto
app.post('/api/contact', (req, res) => {
  const { nombre, universidad, pais, carrera, proceso, telefono, codigoPais, descripcion } = req.body;

  // Validación básica
  if (!nombre || !telefono || !descripcion) {
    return res.status(400).json({ 
      success: false, 
      message: 'Por favor complete todos los campos requeridos' 
    });
  }

  const contact = {
    id: Date.now(),
    nombre,
    universidad,
    pais,
    carrera,
    proceso: Array.isArray(proceso) ? proceso : [proceso],
    telefono,
    codigoPais,
    descripcion,
    fecha: new Date().toISOString()
  };

  contacts.push(contact);

  console.log('Nuevo contacto recibido:', contact);

  res.json({ 
    success: true, 
    message: 'Su solicitud ha sido enviada correctamente. Nos pondremos en contacto pronto.',
    contact 
  });
});

// Ruta para obtener contactos (solo para desarrollo/admin)
app.get('/api/contacts', (req, res) => {
  res.json({ contacts });
});

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

