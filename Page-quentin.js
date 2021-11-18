// -----------------carrousel----------

let flecheDroite = document.querySelector('.fleche-droite');
let flecheGauche = document.querySelector('.fleche-gauche');
let carrousel = document.querySelector('.carrousel-box');
let image = document.getElementsByClassName('container-image-carrousel');
let images = document.getElementsByClassName('container-images');
let text = document.getElementsByClassName('text');
let tab = [];
let tabs = [];
let tabT = [];

for(let x = 0; x<10; x++){
    tab.push(image[x]);
}
for(let x = 0; x<10; x++){
    tabs.push(images[x]);
}
for(let x = 0; x<10; x++){
    tabT.push(text[x]);
}

let valeurRotation = 0;
let indexImage = 0;

function opacityDroite() {
    let y=0;
    for(let i = 0; i<10; i++){
        
        tab[i].style.opacity = "0.6";
        tabs[i].style.opacity = "0.1";
        tab[i].classList.remove("scale");
        tabs[i].style.transform = "translateX(-120vw)";
        tabT[i].classList.remove("text-translate");
    }
    if(indexImage == 0){
        indexImage =9;    
        } else {
    
            indexImage -= 1;
        }
    
    tab[indexImage].style.opacity = "1";
    tab[indexImage].classList.add("scale");
    tabs[indexImage].style.transform = "translateX(0)";
    tabs[indexImage].style.opacity = "1";
    tabT[indexImage].classList.add("text-translate");
}


function opacityGauche() {
    let y=0;
    for(let i = 0; i<10; i++){
        
        tab[i].style.opacity = "0.6";
        tabs[i].style.opacity = "0.1";
        tab[i].classList.remove("scale");
        tabs[i].style.transform = "translateX(-120vw)";
        tabT[i].classList.remove("text-translate");
    }
    if(indexImage == 9){
        indexImage =0;    
        } else {
    
            indexImage += 1;
        }

    tab[indexImage].style.opacity = "1";
    tab[indexImage].classList.add("scale");
    tabs[indexImage].style.transform = "translateX(0vw)"
    tabs[indexImage].style.opacity = "1";
    tabT[indexImage].classList.add("text-translate");
}

flecheDroite.addEventListener('click', function (){
    valeurRotation += 36;
    carrousel.style.transform = "rotateY(" + valeurRotation + "deg)";
    opacityDroite();
})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 39){
    valeurRotation += 36;
    carrousel.style.transform = "rotateY(" + valeurRotation + "deg)";
    opacityDroite();
    }
})

flecheGauche.addEventListener('click', function(){
    valeurRotation -= 36;
    carrousel.style.transform = "rotateY(" + valeurRotation + "deg)";
    opacityGauche();
})
document.addEventListener('keydown', function(e){
    if(e.keyCode == 37){
    valeurRotation -= 36;
    carrousel.style.transform = "rotateY(" + valeurRotation + "deg)";
    opacityGauche();
    }
})