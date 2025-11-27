const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { contacts, universities } = require('./database/db');

const app = express();
const PORT = process.env.PORT || 3001;

// Configurar CORS para permitir requests desde GitHub Pages y otros dominios
const corsOptions = {
  origin: function (origin, callback) {
    // Permitir requests sin origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    // Lista de dominios permitidos
    const allowedOrigins = [
      'http://localhost:3000',
      'https://tuusuario.github.io',
      process.env.FRONTEND_URL,
      process.env.GITHUB_PAGES_URL
    ].filter(Boolean);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else if (process.env.NODE_ENV === 'production') {
      // En producción, solo permitir orígenes conocidos
      callback(new Error('Not allowed by CORS'));
    } else {
      callback(null, true); // Desarrollo: permitir todos
    }
  },
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para recibir formularios de contacto
app.post('/api/contact', (req, res) => {
  try {
    const { nombre, universidad, pais, carrera, proceso, telefono, codigoPais, descripcion } = req.body;

    // Validación básica
    if (!nombre || !telefono || !descripcion) {
      return res.status(400).json({ 
        success: false, 
        message: 'Por favor complete todos los campos requeridos' 
      });
    }

    // Guardar en base de datos
    const contact = contacts.create({
      nombre,
      universidad,
      pais,
      carrera,
      proceso: Array.isArray(proceso) ? proceso : [proceso],
      telefono,
      codigoPais,
      descripcion
    });

    console.log('✅ Nuevo contacto guardado en BD:', contact);

    res.json({ 
      success: true, 
      message: 'Su solicitud ha sido enviada correctamente. Nos pondremos en contacto pronto.',
      contact 
    });
  } catch (error) {
    console.error('❌ Error al guardar contacto:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al procesar su solicitud. Por favor intente nuevamente.' 
    });
  }
});

// Ruta para obtener contactos (solo para desarrollo/admin)
app.get('/api/contacts', (req, res) => {
  try {
    const { status } = req.query;
    const allContacts = status 
      ? contacts.getByStatus(status)
      : contacts.getAll();
    
    res.json({ 
      success: true,
      contacts: allContacts,
      total: allContacts.length
    });
  } catch (error) {
    console.error('❌ Error al obtener contactos:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener contactos' 
    });
  }
});

// Ruta para obtener contacto por ID
app.get('/api/contacts/:id', (req, res) => {
  try {
    const contact = contacts.getById(parseInt(req.params.id));
    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        message: 'Contacto no encontrado' 
      });
    }
    res.json({ success: true, contact });
  } catch (error) {
    console.error('❌ Error al obtener contacto:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener contacto' 
    });
  }
});

// Ruta para actualizar estado de contacto
app.patch('/api/contacts/:id/status', (req, res) => {
  try {
    const { status, notas } = req.body;
    const result = contacts.updateStatus(parseInt(req.params.id), status, notas);
    
    if (result.changes === 0) {
      return res.status(404).json({ 
        success: false, 
        message: 'Contacto no encontrado' 
      });
    }
    
    res.json({ 
      success: true, 
      message: 'Estado actualizado correctamente' 
    });
  } catch (error) {
    console.error('❌ Error al actualizar estado:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al actualizar estado' 
    });
  }
});

// Ruta para obtener universidades
app.get('/api/universities', (req, res) => {
  try {
    const allUniversities = universities.getAll();
    res.json({ 
      success: true,
      universities: allUniversities 
    });
  } catch (error) {
    console.error('❌ Error al obtener universidades:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error al obtener universidades' 
    });
  }
});

// Ruta de salud
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend funcionando correctamente' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

