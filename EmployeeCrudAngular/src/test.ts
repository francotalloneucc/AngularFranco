// Este archivo es requerido por karma.conf.js y carga recursivamente todos los archivos .spec y del marco.
(window as any)['__env'] = (window as any)['__env'] || {};
(window as any)['__env']['apiUrl'] = (window as any)['__env']['apiUrl'] || 'http://localhost:7150/api/Employee'; // Valor predeterminado para las pruebas

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Primero, inicializa el entorno de pruebas de Angular.
getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

// Luego, encontramos todas las pruebas.
const context = require.context('./', true, /\.spec\.ts$/);
// Y cargamos los módulos.
context.keys().map(context);
