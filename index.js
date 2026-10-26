import { procesarArreglo, duplicar, elevarAlCuadrado } from './utils/procesador.js';

const datosEntrada = [2, 5, 8, 11, 14, 20];
console.log('arreglo original:', datosEntrada);

const duplicados = procesarArreglo(datosEntrada, duplicar);
console.log('Duplicados (callback nombrado):', duplicados);

const cuadrados = procesarArreglo(datosEntrada, elevarAlCuadrado);
console.log('Cuadrados:', cuadrados);

const suma5 = procesarArreglo(datosEntrada, (n) => n + 5);
console.log('funcion flecha para sumar 5:', suma5);

/*
actividad:
1. crear una función llamada cubo en el archivo 'procesador. js'
para elevar cada valor del arreglo al cubo
2. crear una función llamada factorial en el archivo
'procesador js' para hallar el factorial de cada valor del arreglo
3. crear una función flecha para elevar cada valor del arreglo
a la potencia x
4. crear una función flecha para mostrar todos los valores del
arreglo con 2 decimales de precisión.
5. crear una función llamada modulo en el archivo 'procesador.
js' para calcular el módulo 5 a cada valor del arreglo.
6. crear una función flecha para calcular el logaritmo natural de cada valor del arreglo.
7. crear una función llamada raiz en el archivo 'procesador. js'
para hallar la raíz cuadrada de cada valor del arreglo
8. crear una función flecha para realizar un desplazamiento de
3 bits a la izquierda.
9. crear una función llamada desplazamientoIzquierda en el archivo 'procesador. js'
que desplace un número específico de bits a la izquierda.
10. crear una función Ilamada desplazamientoDerecha en el archivo 'procesador. js'
que desplace un número específico de bits a la derecha
11. crear una función llamada total en el archivo 'procesador.
js' para calcular la suma de los valores del arreglo.
12.crear una función llamada porcentaje en archivo 'procesador.
js' que calcule que porcentaje
13.crear una función flecha para ordenar los elementos en
nverso.
14.crear una función flecha para ordenar los elementos
scedentemente
*/

// 1. Cubo de cada valor del arreglo
const cubo = (n) => n ** 3;
const cubos = procesarArreglo(datosEntrada, cubo);
console.log('Cubos:', cubos);

// 2. Factorial de cada valor del arreglo
const factorial = (n) => {
  if (!Number.isInteger(n) || n < 0) return NaN;
  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};
const factoriales = procesarArreglo(datosEntrada, factorial);
console.log('Factoriales:', factoriales);

// 3. Función flecha para elevar cada valor a la potencia x
const elevarPotenciaX = (x) => (n) => n ** x;
const potenciasTres = procesarArreglo(datosEntrada, elevarPotenciaX(3));
console.log('Potencias al cubo con función flecha:', potenciasTres);

// 4. Función flecha para mostrar valores con 2 decimales
const mostrarDosDecimales = (n) => Number(n).toFixed(2);
const valoresConDosDecimales = datosEntrada.map(mostrarDosDecimales);
console.log('Valores con 2 decimales:', valoresConDosDecimales);

// 5. Módulo 5 de cada valor del arreglo
const modulo = (n, divisor = 5) => n % divisor;
const modulo5 = procesarArreglo(datosEntrada, (n) => modulo(n, 5));
console.log('Módulos 5:', modulo5);

// 6. Logaritmo natural de cada valor del arreglo
const logNatural = (n) => Math.log(n);
const logsNaturales = procesarArreglo(datosEntrada, logNatural);
console.log('Logaritmos naturales:', logsNaturales);

// 7. Raíz cuadrada de cada valor del arreglo
const raiz = (n) => Math.sqrt(n);
const raices = procesarArreglo(datosEntrada, raiz);
console.log('Raíces cuadradas:', raices);

// 8. Desplazamiento de 3 bits a la izquierda
const desplazamientoIzquierda3 = (n) => n << 3;
const desplazadosIzquierda3 = procesarArreglo(datosEntrada, desplazamientoIzquierda3);
console.log('Desplazamiento 3 bits izquierda:', desplazadosIzquierda3);

// 9. Desplazamiento de un número específico de bits a la izquierda
const desplazamientoIzquierda = (n, bits) => n << bits;
const desplazadosIzquierda = procesarArreglo(datosEntrada, (n) => desplazamientoIzquierda(n, 2));
console.log('Desplazamiento izquierda 2 bits:', desplazadosIzquierda);

// 10. Desplazamiento de un número específico de bits a la derecha
const desplazamientoDerecha = (n, bits) => n >> bits;
const desplazadosDerecha = procesarArreglo(datosEntrada, (n) => desplazamientoDerecha(n, 2));
console.log('Desplazamiento derecha 2 bits:', desplazadosDerecha);

// 11. Suma total del arreglo
const total = (arreglo) => arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
const sumaTotal = total(datosEntrada);
console.log('Total del arreglo:', sumaTotal);

// 12. Porcentaje de cada valor respecto al total
const porcentaje = (valor, totalValor) => (totalValor === 0 ? 0 : (valor / totalValor) * 100);
const porcentajes = datosEntrada.map((valor) => porcentaje(valor, sumaTotal));
console.log('Porcentajes:', porcentajes.map((valor) => `${valor.toFixed(2)}%`));

// 13. Ordenar elementos en reverso
const ordenarInverso = (arreglo) => [...arreglo].sort((a, b) => b - a);
console.log('Orden inverso:', ordenarInverso(datosEntrada));

// 14. Ordenar elementos de forma ascendente
const ordenarAscendente = (arreglo) => [...arreglo].sort((a, b) => a - b);
console.log('Orden ascendente:', ordenarAscendente(datosEntrada));

