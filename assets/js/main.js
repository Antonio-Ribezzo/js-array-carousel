/*
CONSEGNA:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
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

for(let i = 1; i < 5; i++){
    document.getElementById("slider").innerHTML +=`
    <div class="item">
        ${imgArray[i]}
    </div>
    `
}