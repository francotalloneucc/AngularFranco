// src/generate-env.js
const fs = require('fs');
const apiUrl = process.env.API_URL || 'http://localhost:7150/api/Employee'; // Toma el valor de la variable de entorno o usa un valor predeterminado

const envConfig = `window['env'] = { apiUrl: '${apiUrl}' };`;

fs.writeFile('src/assets/env.js', envConfig, (err) => {
  if (err) {
    console.error('Error al generar el archivo env.js:', err);
  } else {
    console.log('Archivo env.js generado correctamente.');
  }
});
