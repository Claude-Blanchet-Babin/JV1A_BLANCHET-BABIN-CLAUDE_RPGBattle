//déclaration des infos des héros

// listeHéro = [0 nom héro, 1 vie Héro, 2 dégat Héro, 3 mana Héro, 4 spécial]

//déclaration des variables vie héros

vieHero1 = document.getElementById("vieHero1");
vieHero2 = document.getElementById("vieHero2");
vieHero3 = document.getElementById("vieHero3");
vieHero4 = document.getElementById("vieHero4");

//déclaration des variables mana héros

manaHero1 = document.getElementById("manaHero1");
manaHero2 = document.getElementById("manaHero2");
manaHero3 = document.getElementById("manaHero3");
manaHero4 = document.getElementById("manaHero4");

//déclaration des images héros

image1 = document.getElementById("image1");
image2 = document.getElementById("image2");
image3 = document.getElementById("image3");
image4 = document.getElementById("image4");

//déclaration des stats héros

statHero1 = document.getElementById("statHero1");
statHero2 = document.getElementById("statHero2");
statHero3 = document.getElementById("statHero3");
statHero4 = document.getElementById("statHero4");

//déclaration des infos mosntres

//déclaration des variables vie monstres

vieMonstre1 = document.getElementById("vieMonstre1");
vieMonstre2 = document.getElementById("vieMonstre2");
vieMonstre3 = document.getElementById("vieMonstre3");

//déclaration des images monstres

imgMonstre1 = document.getElementById("imgMonstre1");
imgMonstre2 = document.getElementById("imgMonstre2");
imgMonstre3 = document.getElementById("imgMonstre3");

//déclaration des bulles monstres

bulle1 = document.getElementById("bulle1");
bulle2 = document.getElementById("bulle2");
bulle3 = document.getElementById("bulle3");

//déclaration des variables boutons

boutonAttaque = document.getElementById("boutonAttaque");
boutonDefense = document.getElementById("boutonDefense");
boutonSpecial = document.getElementById("boutonSpecial");

CompetenceHeros = document.getElementById("CompetenceHeros");

//déclaration de la variable boite de dialogue

contenuBoiteDialogue = document.getElementById("contenuBoiteDialogue");
scene = document.getElementById("scene");


//variable nécessaire au déroulement du combat

//vérifier si un héros a déjà effectué une action pendant son tour
var action1 = false
var action2 = false
var action3 = false
var action4 = false

//vérifier si un héros a déjà fait son attaque
var attaque1 = false
var attaque2 = false
var attaque3 = false
var attaque4 = false

//définir la défense d'un héros
var def1 = 1
var def2 = 1
var def3 = 1
var def4 = 1

//vérifier si un Monstre est mort
var mortMonstre1 = false
var mortMonstre2 = false
var mortMonstre3 = false

//vérifier si un Héros est mort
var mortHeros1 = false
var mortHeros2 = false
var mortHeros3 = false
var mortHeros4 = false

//fonction pour obtenir un nombre random


var cible = 0

//début du combat

//cacher les éléments que l'on souhaite

CompetenceHeros.style.visibility='hidden';

bulle1.style.visibility='hidden';
bulle2.style.visibility='hidden';
bulle3.style.visibility='hidden';

console.log(action1)

image1.onclick = function() {

    if (action1 == false){

    
        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionner Castle. Que voulez vous faire ?";



        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";

            
            imgMonstre1.onclick = function() {

                if(attaque1==false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 subit 50 points de dégâts.";
                }

                attaque1=true

                action1 = true

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 a été tué.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if (attaque1==false){

                vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                contenuBoiteDialogue.innerHTML = "Le monstre 2 subit 50 points de dégâts.";
                }

                attaque1= true

                action1 = true

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque1==false){

                vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                contenuBoiteDialogue.innerHTML = "Le monstre 3 subit 50 points de dégâts.";

                }

                attaque1 = true

                action1 = true

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 3 a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }
        
            CompetenceHeros.style.visibility='hidden';

        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Castle va se protéger de la prochaine attaque";
            def1 = 2
            action1 = true
            CompetenceHeros.style.visibility='hidden';
        }

    
    }
  
}

image2.onclick = function() {

    if(action2 == false){

        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionner Esposito. Que voulez vous faire ?";

        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";
            
            imgMonstre1.onclick = function() {

                if(attaque2==false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 subit 50 points de dégâts.";
                }

                attaque2 = true

                action2 = true

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 a été tué.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if(attaque2==false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 subit 50 points de dégâts.";
                }

                attaque2 = true

                action2 = true

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque2==false){

                    vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 3 subit 50 points de dégâts.";
                }

                attaque2 = true

                action2 = true

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 3 a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }

            CompetenceHeros.style.visibility='hidden';
        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Esposito va se protéger de la prochaine attaque";
            def2 = 2
            action2 = true
            CompetenceHeros.style.visibility='hidden';
        }
    }
}

image3.onclick = function() {

    if(action3==false){


        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionner Beckett. Que voulez vous faire ?";

        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";
            
            imgMonstre1.onclick = function() {

                if (attaque3 == false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 subit 50 points de dégâts.";
                }
                attaque3 = true

                action3 = true

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 a été tué.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if(attaque3 == false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 subit 50 points de dégâts.";
                }
                attaque3 = true

                action3 = true

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque3 == false){

                vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                contenuBoiteDialogue.innerHTML = "Le monstre 3 subit 50 points de dégâts.";
                }

                attaque3 = true

                action3 = true

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 3 a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }

            CompetenceHeros.style.visibility='hidden';
        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Beckett va se protéger de la prochaine attaque";
            def3 = 2
            action3 = true
            CompetenceHeros.style.visibility='hidden';
        }
    }
}


image4.onclick = function() {

    if (action4==false){

        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionner Ryan. Que voulez vous faire ?";

        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez vous attaquer ?";
            
            imgMonstre1.onclick = function() {

                if(attaque4 == false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 subit 50 points de dégâts.";
                }

                attaque4 = true

                action4 = true

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 1 a été tué.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if(attaque4 == false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 subit 50 points de dégâts.";
                }

                attaque4 = true

                action4 = true

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 2 a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque4 == false){

                    vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le monstre 3 subit 50 points de dégâts.";
                }

                attaque4= true

                action4 = true

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le monstre 3 a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }

            CompetenceHeros.style.visibility='hidden';

        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Ryan va se protéger de la prochaine attaque";
            def4 = 2
            action4 = true
            CompetenceHeros.style.visibility='hidden';

        }
    }
}


//début de la riposte
scene.onclick = function(){
    if ((action1== true) && (action2 == true) && (action3 == true) && (action4 == true)) {
        setTimeout(() => {
            contenuBoiteDialogue.innerHTML = "Les monstres vont attaquer !";
            setTimeout(() => {

                if (mortMonstre1 == false){
                    cible = Math.floor(Math.random() * 4)+1;
                    if ((cible == 1) && (mortHeros1==false)){
                        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Castle et lui inflige points de dégâts";

                        if (vieHero1.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Castle a été tué.";
                            statHero1.style.visibility='hidden';
                            mortHeros1 = true
                        }
                    }
                    if ((cible == 2) && (mortHeros2 == false)){
                        vieHero2.innerHTML = parseInt(vieHero1.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Esposito et lui inflige points de dégâts";

                        if (vieHero2.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Esposito a été tué.";
                            statHero2.style.visibility='hidden';
                            mortHeros2 = true
                        }
                    }
                    if ((cible == 3) && (mortHeros3 == false)){
                        vieHero3.innerHTML = parseInt(vieHero3.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Beckett et lui inflige points de dégâts";

                        if (vieHero3.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Beckett a été tué.";
                            statHero3.style.visibility='hidden';
                            mortHeros3 = true
                        }
                    }
                    if ((cible == 4) && (mortHeros4 == false)){
                        vieHero4.innerHTML = parseInt(vieHero4.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Ryan et lui inflige points de dégâts";

                        if (vieHero4.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Ryan a été tué.";
                            statHero4.style.visibility='hidden';
                            mortHeros4 = true
                        }
                    }
                }

            },2500);

            setTimeout(() => {

                if (mortMonstre2 == false){
                    cible = Math.floor(Math.random() * 4)+1;
                    if ((cible == 1) && (mortHeros1==false)){
                        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Castle et lui inflige points de dégâts";

                        if (vieHero1.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Castle a été tué.";
                            statHero1.style.visibility='hidden';
                            mortHeros1 = true
                        }
                    }
                    if ((cible == 2) && (mortHeros2 == false)){
                        vieHero2.innerHTML = parseInt(vieHero1.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Esposito et lui inflige points de dégâts";

                        if (vieHero2.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Esposito a été tué.";
                            statHero2.style.visibility='hidden';
                            mortHeros2 = true
                        }
                    }
                    if ((cible == 3) && (mortHeros3 == false)){
                        vieHero3.innerHTML = parseInt(vieHero3.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Beckett et lui inflige points de dégâts";

                        if (vieHero3.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Beckett a été tué.";
                            statHero3.style.visibility='hidden';
                            mortHeros3 = true
                        }
                    }
                    if ((cible == 4) && (mortHeros4 == false)){
                        vieHero4.innerHTML = parseInt(vieHero4.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Ryan et lui inflige points de dégâts";

                        if (vieHero4.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Ryan a été tué.";
                            statHero4.style.visibility='hidden';
                            mortHeros4 = true
                        }
                    }
                }

            },5000);

            setTimeout(() => {

                if (mortMonstre3 == false){
                    cible = Math.floor(Math.random() * 4)+1;
                    if ((cible == 1) && (mortHeros1==false)){
                        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Castle et lui inflige points de dégâts";

                        if (vieHero1.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Castle a été tué.";
                            statHero1.style.visibility='hidden';
                            mortHeros1 = true
                        }
                    }
                    if ((cible == 2) && (mortHeros2 == false)){
                        vieHero2.innerHTML = parseInt(vieHero1.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Esposito et lui inflige points de dégâts";

                        if (vieHero2.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Esposito a été tué.";
                            statHero2.style.visibility='hidden';
                            mortHeros2 = true
                        }
                    }
                    if ((cible == 3) && (mortHeros3 == false)){
                        vieHero3.innerHTML = parseInt(vieHero3.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Beckett et lui inflige points de dégâts";

                        if (vieHero3.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Beckett a été tué.";
                            statHero3.style.visibility='hidden';
                            mortHeros3 = true
                        }
                    }
                    if ((cible == 4) && (mortHeros4 == false)){
                        vieHero4.innerHTML = parseInt(vieHero4.innerHTML) - 10;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Ryan et lui inflige points de dégâts";

                        if (vieHero4.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Ryan a été tué.";
                            statHero4.style.visibility='hidden';
                            mortHeros4 = true
                        }
                    }
                }

            },7000);

            
            action1 = false
            action2 = false
            action3 = false
            action4 = false
            
            attaque1 = false
            attaque2 = false
            attaque3 = false
            attaque4 = false

        },2000);

    }
}






if (vieHero1.innerHTML <= 0) {
    vieHero1.innerHTML = 0;
    contenuBoiteDialogue.innerHTML = "Le Héros 1 as été tué.";
}

// survol du monstre 1
document.getElementById("imgMonstre1").onmouseover = function()
{mouseOver1()};
document.getElementById("imgMonstre1").onmouseout = function()
{mouseOut1()};

function mouseOver1() {
    document.getElementById("bulle1").style.visibility='visible';
}

function mouseOut1() {
    document.getElementById("bulle1").style.visibility='hidden';
}

// survol du monstre 2
document.getElementById("imgMonstre2").onmouseover = function()
{mouseOver2()};
document.getElementById("imgMonstre2").onmouseout = function()
{mouseOut2()};

function mouseOver2() {
    document.getElementById("bulle2").style.visibility='visible';
}

function mouseOut2() {
    document.getElementById("bulle2").style.visibility='hidden';
}

// survol du monstre 3
document.getElementById("imgMonstre3").onmouseover = function()
{mouseOver3()};
document.getElementById("imgMonstre3").onmouseout = function()
{mouseOut3()};

function mouseOver3() {
    document.getElementById("bulle3").style.visibility='visible';
}

function mouseOut3() {
    document.getElementById("bulle3").style.visibility='hidden';
}
