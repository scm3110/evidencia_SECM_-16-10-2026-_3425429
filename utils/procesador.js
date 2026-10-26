/**
 * 
 * Módulo procesador de arreglos mediante funciones de orden superior y callbacks.
 */

// Función de orden superior que aplica una función callback a cada elemento
export const procesarArreglo = (numeros, callback) => {
  if (!Array.isArray(numeros)) {
    throw new Error('El primer argumento debe ser un arreglo de números.');
  }
  if (typeof callback !== 'function') {
    throw new Error('El segundo argumento debe ser una función callback.');
  }

  const resultado = [];
  for (let i = 0; i < numeros.length; i++) {
    resultado.push(callback(numeros[i], i));
  }
  return resultado;
};

// Callbacks helpers con sintaxis de funciones flecha
export const duplicar = (num) => num * 2;
export const esPar = (num) => num % 2 === 0;
export const elevarAlCuadrado = (num) => Math.pow(num, 2);