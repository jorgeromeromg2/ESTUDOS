function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','bebemenino.png')
            }else if (idade < 21){
                //adolescente
                img.setAttribute('src','admenino.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','homem2.png')
            }else {
                //Idoso
                img.setAttribute('src','homem1.png')
            }

        }else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 12){
                //criança
                img.setAttribute('src','bebemenina.png')
            }else if (idade < 21){
                //adolescente
                img.setAttribute('src','admenina.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src','mulher2.png')
            }else {
                //Idoso
                img.setAttribute('src','mulher1.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
        document.style.background = 'blue'
    }

}