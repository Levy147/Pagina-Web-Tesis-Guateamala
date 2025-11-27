-- Base de datos para Tesis Guatemala
-- Esquema SQL para PostgreSQL/MySQL/MariaDB

-- Tabla de contactos/solicitudes
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    universidad VARCHAR(255),
    pais VARCHAR(100),
    carrera VARCHAR(255),
    proceso TEXT[], -- Array de procesos seleccionados
    telefono VARCHAR(20) NOT NULL,
    codigo_pais VARCHAR(10) DEFAULT '+502',
    descripcion TEXT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50) DEFAULT 'pendiente', -- pendiente, contactado, en_proceso, completado
    notas TEXT,
    INDEX idx_fecha_creacion (fecha_creacion),
    INDEX idx_estado (estado)
);

-- Tabla de servicios (opcional - para tracking)
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2),
    activo BOOLEAN DEFAULT true,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de testimonios/reseñas
CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    universidad VARCHAR(255),
    carrera VARCHAR(255),
    comentario TEXT NOT NULL,
    calificacion INTEGER CHECK (calificacion >= 1 AND calificacion <= 5),
    aprobado BOOLEAN DEFAULT false,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_aprobado (aprobado)
);

-- Tabla de universidades (para tracking)
CREATE TABLE IF NOT EXISTS universities (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL UNIQUE,
    pais VARCHAR(100),
    logo_url VARCHAR(500),
    activa BOOLEAN DEFAULT true,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar universidades comunes
INSERT INTO universities (nombre, pais) VALUES
    ('USAC', 'Guatemala'),
    ('Universidad del Valle de Guatemala', 'Guatemala'),
    ('Universidad Rafael Landívar', 'Guatemala'),
    ('Universidad Francisco Marroquín', 'Guatemala'),
    ('Universidad Da Vinci', 'Guatemala'),
    ('Universidad Mariano Gálvez', 'Guatemala'),
    ('Universidad del Istmo', 'Guatemala'),
    ('Universidad Panamericana', 'Guatemala'),
    ('ENEB', 'España')
ON CONFLICT (nombre) DO NOTHING;

