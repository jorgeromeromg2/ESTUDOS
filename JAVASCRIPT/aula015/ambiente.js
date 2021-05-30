let num = [5,2,3,5]
num[3]=6 //posição(indice) + conteúdo.
num.push(7,9) //inclui automaticamente os valores selecionados
num.sort() // coloca em ordem os vetores
console.log(`Nosso vetor é ${num} e possui ${num.length} posições. O primeiro vetor é ${num[0]}, o segundo ${num[1]}, terceiro ${num[3]} e o quanto ${num[4]}`)

let val = num.indexOf(4) // busca a posição(indice) do valor informado
if(val == -1){
    console.log(`O valor não foi encontrado!`)
}else{
console.log(`O valor 3 está no indice ${val} `)
}