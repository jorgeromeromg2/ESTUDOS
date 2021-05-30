function soma(n1=0, n2=0){ //quando colocado 0 ele considera o zero caso não exista valor em console.
    let adicao = n1 + n2
    if(adicao%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
    
}
//console.log(soma(6,8))
let res = soma(3)
console.log(res)