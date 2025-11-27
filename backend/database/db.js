const sqlite3 = require('better-sqlite3');
const path = require('path');

// Crear conexión a la base de datos SQLite
const dbPath = path.join(__dirname, 'tesis_guatemala.db');
const db = sqlite3(dbPath);

// Inicializar la base de datos
function initDatabase() {
  // Leer el esquema SQL
  const fs = require('fs');
  const schemaPath = path.join(__dirname, 'schema.sqlite.sql');
  const schema = fs.readFileSync(schemaPath, 'utf8');
  
  // Ejecutar el esquema
  db.exec(schema);
  console.log('✅ Base de datos inicializada correctamente');
}

// Funciones para contactos
const contacts = {
  // Crear un nuevo contacto
  create: (contactData) => {
    const stmt = db.prepare(`
      INSERT INTO contacts (nombre, universidad, pais, carrera, proceso, telefono, codigo_pais, descripcion)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const procesoJson = JSON.stringify(contactData.proceso || []);
    
    const result = stmt.run(
      contactData.nombre,
      contactData.universidad || null,
      contactData.pais || null,
      contactData.carrera || null,
      procesoJson,
      contactData.telefono,
      contactData.codigoPais || '+502',
      contactData.descripcion
    );
    
    return {
      id: result.lastInsertRowid,
      ...contactData,
      fecha_creacion: new Date().toISOString()
    };
  },
  
  // Obtener todos los contactos
  getAll: () => {
    const stmt = db.prepare('SELECT * FROM contacts ORDER BY fecha_creacion DESC');
    const contacts = stmt.all();
    
    // Parsear el JSON de proceso
    return contacts.map(contact => ({
      ...contact,
      proceso: JSON.parse(contact.proceso || '[]')
    }));
  },
  
  // Obtener contacto por ID
  getById: (id) => {
    const stmt = db.prepare('SELECT * FROM contacts WHERE id = ?');
    const contact = stmt.get(id);
    
    if (contact) {
      contact.proceso = JSON.parse(contact.proceso || '[]');
    }
    
    return contact;
  },
  
  // Actualizar estado de contacto
  updateStatus: (id, status, notas = null) => {
    const stmt = db.prepare('UPDATE contacts SET estado = ?, notas = ? WHERE id = ?');
    return stmt.run(status, notas, id);
  },
  
  // Obtener contactos por estado
  getByStatus: (status) => {
    const stmt = db.prepare('SELECT * FROM contacts WHERE estado = ? ORDER BY fecha_creacion DESC');
    const contacts = stmt.all(status);
    
    return contacts.map(contact => ({
      ...contact,
      proceso: JSON.parse(contact.proceso || '[]')
    }));
  }
};

// Funciones para universidades
const universities = {
  getAll: () => {
    const stmt = db.prepare('SELECT * FROM universities WHERE activa = 1 ORDER BY nombre');
    return stmt.all();
  },
  
  create: (universityData) => {
    const stmt = db.prepare(`
      INSERT INTO universities (nombre, pais, logo_url)
      VALUES (?, ?, ?)
    `);
    return stmt.run(universityData.nombre, universityData.pais, universityData.logo_url);
  }
};

// Inicializar al cargar el módulo
initDatabase();

module.exports = {
  db,
  contacts,
  universities,
  initDatabase
};

