// Script para inicializar la base de datos
// Ejecutar: node scripts/init-db.js

const { initDatabase, universities } = require('../database/db');

console.log('🔄 Inicializando base de datos...');

try {
  initDatabase();
  console.log('✅ Base de datos inicializada correctamente');
  
  // Verificar universidades
  const allUniversities = universities.getAll();
  console.log(`✅ ${allUniversities.length} universidades cargadas`);
  
  console.log('\n📊 Base de datos lista para usar!');
  process.exit(0);
} catch (error) {
  console.error('❌ Error al inicializar base de datos:', error);
  process.exit(1);
}

