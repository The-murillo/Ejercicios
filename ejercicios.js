// Ejercicio 1
const obtenerMenor = (numeros) => {
  let menor = Infinity; // valor infinito positivo

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] <= menor) {
      menor = numeros[i];
    }
  }

  return menor;
};
console.log(obtenerMenor([5, 77, 99, 6, 2, 33]));

// Ejercicio 2
const sumar = (numeroSuma) => {
  let resultado = "";
  for (let c = 0; c < numeroSuma.length; c++) {
    resultado = parseInt(resultado + numeroSuma[c]);
  }
  return resultado;
};
console.log(sumar([5, 77, 99, 6, 2, 33]));

// Ejercicio 3
const contieneIndice = (numero, array) => {
  for (let c = 0; c < array.length; c++) {
    if (array[c] === numero) {
      return true;
    }
  }
  return false;
};
let list = [12, 5, 3, 2];
console.log(contieneIndice(7, list));

//Ejercicios
//Invertir caso
const invertirCaso = (chain) => {
  convertChain = chain.split("");
  for (let j = 0; j < convertChain.length; j++) {
    if (convertChain[j] === convertChain[j].toUpperCase()) {
      convertChain[j] = convertChain[j].toLowerCase();
    } else {
      convertChain[j] = convertChain[j].toUpperCase();
    }
  }
  return convertChain.join("");
};

console.log(invertirCaso("Ada Lovelace"));
console.log(invertirCaso("feliz cumple"));
console.log(invertirCaso("jAvAsCrIpT"));

//gano
const gano = (tragamonedas) => {
  for (let j = 0; j < 5; j++) {
    if (tragamonedas[j] != tragamonedas[0]) {
      return false;
    }
  }
  return true;
};

console.log(gano(["⭐️", "⭐️", "⭐️", "💫", "✨"]));
console.log(gano(["💫", "💫", "💫", "💫", "💫"]));
console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"]));

//Estan juntoss
const estanJuntos = (personajes) => {
  //slice(x.z) escoger un bloque del array desde x hasta z
  const frodo = personajes.indexOf("Frodo");
  const sam = personajes.indexOf("Sam");
  console.log(sam);

  return sam - frodo == 1 || sam - frodo == -1;
};

console.log(estanJuntos(["Sam", "Frodo", "Legolas"]));
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"]));
console.log(estanJuntos(["Sam", "Frodo", "sam"]));

/*
INTEGRANTES:
Camilo Cabuya 
Carlos Murillo
Jonathan Arias 
Juan restrepo
*/