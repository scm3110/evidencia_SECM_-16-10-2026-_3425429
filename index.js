import { procesarArreglo, duplicar, elevarAlCuadrado } from './utils/procesador.js';

const datosEntrada = [2, 5, 8, 11, 14, 20];
console.log('arreglo original:', datosEntrada);

const duplicados = procesarArreglo(datosEntrada, duplicar);
console.log('Duplicados (callback nombrado):', duplicados);

const cuadrados = procesarArreglo(datosEntrada, elevarAlCuadrado);
console.log('Cuadrados:', cuadrados);

const suma5 = procesarArreglo(datosEntrada, (n) => n + 5);
console.log('funcion flecha para sumar 5:', suma5);