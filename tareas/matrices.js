/* Punto 3 */
/* Encontrar el producto mayor de un array hacia la derecha */

function encontrarProductoMayor(lista){
    let productos = [];
    for(num in lista){
        let producto;
        if(num == lista.length - 1){
            break;
        } else {
            producto = lista[num] * lista[parseInt(num) + 1];
            productos.push(producto);
        }
    }
    return Math.max(...productos);
}

let matriz = [
    [15,61,60,66,9,69,4],
    [62,7,67,59,68,19,33],
    [5,1, 8, 23, 21, 30, 40],
    [50,99,80,41,39,3,2],
    [1,20,25,34,36,82,75],
    [42,23,40,14,29,49,58]
];

const productosMayores = [];
for(list of matriz){
    productosMayores.push(encontrarProductoMayor(list));
}
let resultado = Math.max(...productosMayores);
console.log(productosMayores)
document.write("El producto mayor (hacia la derecha) es: " + resultado);