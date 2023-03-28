/*
CONSEGNA:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

BONUS-1
    • Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
*/

// creo l'array di immagini

let imgArray =[
    `<img id="img-slider" style="height: 30rem;" src="./assets/img/01.webp" alt="gatto.webp">`,
    `<img id="img-slider" style="height: 30rem;" src="./assets/img/02.webp" alt="gatto.webp">`,
    `<img id="img-slider" style="height: 30rem;" src="./assets/img/03.webp" alt="gatto.webp">`,
    `<img id="img-slider" style="height: 30rem;" src="./assets/img/04.webp" alt="gatto.webp">`,
    `<img id="img-slider" style="height: 30rem;" src="./assets/img/05.webp" alt="gatto.webp">`
]

console.log(imgArray)

// inserisco dinamicamente le immagini con js
document.getElementById("slider").innerHTML += `
    <div class="item first active">
        ${imgArray[0]}
    </div>
`;

for(let i = 1; i < 4; i++){
    document.getElementById("slider").innerHTML +=`
    <div class="item">
        ${imgArray[i]}
    </div>
    `
}

document.getElementById("slider").innerHTML += `
    <div class="item last">
        ${imgArray[4]}
    </div>
`;

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    // seleziono div con active, prima immagine
    let activeItem = document.querySelector('.item.active')
    console.log(activeItem)

    let itemToActive = activeItem.nextElementSibling
    console.log(itemToActive)

    if(activeItem.classList.contains('last')){
        itemToActive = document.querySelector('.item.first')
    }

    //rimozione classe active
    activeItem.classList.remove('active')
    //aggiunta della classe active all'elemento successivo
    itemToActive.classList.add('active')
})

prev.addEventListener('click', function(){
    // seleziono div con active, prima immagine
    let activeItem = document.querySelector('.item.active')
    console.log(activeItem)

    let itemToActive = activeItem.previousElementSibling
    console.log(itemToActive)

    if(activeItem.classList.contains('first')){
        itemToActive = document.querySelector('.item.last')
    }

    //rimozione classe active
    activeItem.classList.remove('active')
    //aggiunta della classe active all'elemento successivo
    itemToActive.classList.add('active')
})

