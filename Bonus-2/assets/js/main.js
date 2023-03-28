/*
CONSEGNA:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

BONUS-2:
    • Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
*/

/* Bisognerà rimuovere o aggiungere delle classi in maniera opportuna andando a targhettizzare alcuni elementi già presenti nel DOM, tutto attraverso il click sulle frecce.
*/

// Targhettizzo le frecce
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

console.log(next,prev)

next.addEventListener('click', function(){

    let activeBigImg = document.querySelector(`.container-slider.active`)
    let activeSmallImg = document.querySelector('.img-slider.active')
    let BigImgToActive = activeBigImg.nextElementSibling
    let smallImgToActive = activeSmallImg.nextElementSibling

    if(activeSmallImg.classList.contains('last')){
        smallImgToActive = document.querySelector('.img-slider.first')
    }

    if(activeBigImg.classList.contains('last')){
        BigImgToActive = document.querySelector('.container-slider.first')
    }

    // rimozione classe .active
    activeSmallImg.classList.remove('active')
    activeBigImg.classList.remove('active')
    //aggiunta della classe active all'elemento successivo
    smallImgToActive.classList.add('active')
    BigImgToActive.classList.add('active')
})


prev.addEventListener('click', function(){

    let activeBigImg = document.querySelector(`.container-slider.active`)
    let activeSmallImg = document.querySelector('.img-slider.active')
    let BigImgToActive = activeBigImg.previousElementSibling
    let smallImgToActive = activeSmallImg.previousElementSibling

    if(activeSmallImg.classList.contains('first')){
        smallImgToActive = document.querySelector('.img-slider.last')
    }

    if(activeBigImg.classList.contains('first')){
        BigImgToActive = document.querySelector('.container-slider.last')
    }

    // rimozione classe .active
    activeSmallImg.classList.remove('active')
    activeBigImg.classList.remove('active')
    //aggiunta della classe active all'elemento successivo
    smallImgToActive.classList.add('active')
    BigImgToActive.classList.add('active')
})


