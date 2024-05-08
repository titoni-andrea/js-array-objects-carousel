const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector(".cont-flex");
let carosello = document.createElement("div");
carosello.classList.add("carosello");
let prevBtn = document.getElementById("prev-img");
let nextBtn = document.getElementById("next-img");

function genCarosello(array) {

    for (let i = 0; i < array.length; i++) {
        carosello.innerHTML = ""

        prevBtn.addEventListener("click", function() {
            if (i > 0) {
                slideSelected--
            }
        
            else {
                slideSelected = numSlide - 1
            }
        })

        let slide = array[i];

        genSlide(slide)
    };
}

function genSlide(oggetto) {


    for (const key in oggetto) {

        // SE LA CHIAVE E' L'IMMAGINE LA CREO E LA METTO NEL CAROSELLO
        if (key == "image") {
            let imgCard = document.createElement("img")
            imgCard.src = `${oggetto["image"]}`
            imgCard.classList.add("slide")
            carosello.append(imgCard)
        }

        // SE NON LO E' CREO LE STRINGHE DI TESTO PER IL NOME, DESCRIZIONE E CASA DI PRODUZIONE
        else {
            let text = document.createElement("p");
            container.append(carosello);
            carosello.append(text)
            text.append(oggetto[key])
        }
    };
}

genCarosello(images);