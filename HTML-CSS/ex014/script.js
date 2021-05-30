function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
msg.innerHTML = `Agora são ${hora} e ${min} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'imagem/fotomanha.png'
        document.body.style.background = '#a9d43b'
    } else if (hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'imagem/fototarde.png'
        document.body.style.background = '#8f653e'
    }else{
        //boa noite
        img.src = 'imagem/fotonoite.png'
        document.body.style.background = '#0d3a55'
    }  
}