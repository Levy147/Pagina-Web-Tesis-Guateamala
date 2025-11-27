-- Base de datos SQLite para Tesis Guatemala
-- Esquema simplificado para SQLite (archivo local)

-- Tabla de contactos/solicitudes
CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    universidad TEXT,
    pais TEXT,
    carrera TEXT,
    proceso TEXT, -- JSON string de array
    telefono TEXT NOT NULL,
    codigo_pais TEXT DEFAULT '+502',
    descripcion TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado TEXT DEFAULT 'pendiente', -- pendiente, contactado, en_proceso, completado
    notas TEXT
);

-- Índices para mejor rendimiento
CREATE INDEX IF NOT EXISTS idx_contacts_fecha ON contacts(fecha_creacion);
CREATE INDEX IF NOT EXISTS idx_contacts_estado ON contacts(estado);

-- Tabla de servicios (opcional)
CREATE TABLE IF NOT EXISTS services (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    descripcion TEXT,
    precio REAL,
    activo INTEGER DEFAULT 1, -- SQLite usa INTEGER para boolean
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de testimonios/reseñas
CREATE TABLE IF NOT EXISTS testimonials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    universidad TEXT,
    carrera TEXT,
    comentario TEXT NOT NULL,
    calificacion INTEGER CHECK (calificacion >= 1 AND calificacion <= 5),
    aprobado INTEGER DEFAULT 0,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_testimonials_aprobado ON testimonials(aprobado);

-- Tabla de universidades
CREATE TABLE IF NOT EXISTS universities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE,
    pais TEXT,
    logo_url TEXT,
    activa INTEGER DEFAULT 1,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertar universidades comunes
INSERT OR IGNORE INTO universities (nombre, pais) VALUES
    ('USAC', 'Guatemala'),
    ('Universidad del Valle de Guatemala', 'Guatemala'),
    ('Universidad Rafael Landívar', 'Guatemala'),
    ('Universidad Francisco Marroquín', 'Guatemala'),
    ('Universidad Da Vinci', 'Guatemala'),
    ('Universidad Mariano Gálvez', 'Guatemala'),
    ('Universidad del Istmo', 'Guatemala'),
    ('Universidad Panamericana', 'Guatemala'),
    ('ENEB', 'España');

