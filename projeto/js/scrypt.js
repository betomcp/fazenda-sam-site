var aux = 1
var maxImages = 4

function changeImage(){
    let image = document.getElementById('section-1-image')
    aux++
    if(aux > maxImages){
        aux = 1
        image.style.backgroundImage = `url(../images/fundos-section-1/fundo-1-${aux}.jpg)`
    }else{
        image.style.backgroundImage = `url(../images/fundos-section-1/fundo-1-${aux}.jpg)`
    }
}

window.setInterval(changeImage, 6500)