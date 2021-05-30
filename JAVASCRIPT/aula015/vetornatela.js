let valores = [0,9,5,2,7,3]
/*console.log(valores)
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])

for(let val = 0; val < valores.length;val++){
    valores.sort() //colocado em ordem
    console.log(`A posição ${val} tem o valor ${valores[val]}`)
}*/

//for(let val in valores){
//    console.log(`A posição ${val} tem o valor ${valores[val]}`) //não organizado
//}

for(let val in valores){

    /*
    - Coloca os vetores em ordem
    valores.sort()
    - Exclusão. Os números no parênteses indica o indice e a quantidade de elementes que serão excluídos.
    valores.splice(2,2) 
    - Remove um elemento do array. o elemento de índice 1 passa a ser o de índice 0 e assim sucessivamente
    valores.shift()
    - Remove o elemento final do array
    valores.pop()*/
  
    console.log(`A posição ${val} tem o valor ${valores[val]}`) //organizado
}

