/* Punto 4 */
/* Realizar una permutación lexicográfica con los numero 1 , 2 , 3 y 4*/

// Permutacion lexicográfica (pl)
function pl(lista){
  const resultado = [];

  const permutar = (subLista, permutacion = []) => {
    if(!subLista.length){
      resultado.push(permutacion)
      return;
    }

    for(indice in subLista){
      let subListaOriginal = subLista.slice();
      let numeroExtraido = subListaOriginal.splice(indice,1);

      permutar(subListaOriginal, permutacion.concat(numeroExtraido));
    }
  }

  permutar(lista);

  return resultado;
}

let numeros = [2,1,4,3]
let numerosOrdenados = numeros.sort();
let resultado = pl(numerosOrdenados);
resultado.forEach(numero => {
    console.log(numero.join(""))
});