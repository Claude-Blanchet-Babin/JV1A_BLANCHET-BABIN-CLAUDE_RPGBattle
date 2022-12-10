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

//définir la cible lors de la riposte des monstres
var cible = 0

//définir les dégâts du monstre lors de la riposte
var degat1 = 0
var degat2 = 0
var degat2 = 0

//définir les dégâts de Beckett en cas d'attaque spéciale
var degatBeckett = 0
var multiplicateur = 0

//définir les cooldown des héros
cool1 = [0,0,0];
cool2 = [0,0,0];
cool3 = [0,0,0];
cool4 = [0,0,0];

//début du combat

//cacher les éléments que l'on souhaite

CompetenceHeros.style.visibility='hidden';

bulle1.style.visibility='hidden';
bulle2.style.visibility='hidden';
bulle3.style.visibility='hidden';


//sélection du héros "Castle"
image1.onclick = function() {

    if (action1 == false){

    
        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionné Castle. Que voulez-vous faire ?";
        boutonAttaque.style.backgroundColor = 'rgb(231, 137, 137)';
        boutonDefense.style.backgroundColor = 'rgb(78, 143, 78)';
        boutonSpecial.style.backgroundColor = 'rgb(120, 120, 202)';

        if (cool1[0]>0){

            boutonAttaque.style.backgroundColor = 'grey';
        }

        if(cool1[1]>0){

            boutonDefense.style.backgroundColor = 'grey';
        }

        if(cool1[2]>0){

            boutonSpecial.style.backgroundColor = 'grey';
        }



        boutonAttaque.onclick = function() {

            if(cool1[0]==0){


                contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez-vous attaquer ?";

                
                imgMonstre1.onclick = function() {

                    if(attaque1==false){

                        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                        contenuBoiteDialogue.innerHTML = "La guêpe subit 50 points de dégâts.";
                    }

                    attaque1=true;

                    action1 = true;

                    cool1[0]=2;

                    if (vieMonstre1.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                        imgMonstre1.style.visibility='hidden';
                        mortMonstre1 = true;
                    }
                }
                
                imgMonstre2.onclick = function() {

                    if (attaque1==false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le robot subit 50 points de dégâts.";
                    }

                    attaque1= true;

                    action1 = true;

                    cool1[0]=2;

                    if (vieMonstre2.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                        imgMonstre2.style.visibility='hidden';
                        mortMonstre2 = true;
                    }
                }

                imgMonstre3.onclick = function() {

                    if(attaque1==false){

                    vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "L'arbre subit 50 points de dégâts.";

                    }

                    attaque1 = true;

                    action1 = true;

                    cool1[0]=2;

                    if (vieMonstre3.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "L'arbre 3 a été tué.";
                        imgMonstre3.style.visibility='hidden';
                        mortMonstre3 = true;
                    }
                }
            
                CompetenceHeros.style.visibility='hidden';

            }

            else
                if(cool1[0]>0){
                    contenuBoiteDialogue.innerHTML = "Castle doit attendre le prochain tour pour attaquer.";
                }
        }

        boutonDefense.onclick = function(){

            if (cool1[1]==0){

                contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Castle va se protéger lors de la prochaine riposte.";
                def1 = 2;
                action1 = true;
                cool1[1] = 2;
                CompetenceHeros.style.visibility='hidden';
            }

            else
                if(cool1[1]>0){
                    contenuBoiteDialogue.innerHTML = "Castle doit attendre le prochain tour pour se défendre.";
                }
        }

        boutonSpecial.onclick = function(){

            if(cool1[2]==0){


                if(manaHero1.innerHTML >= 10){

                    contenuBoiteDialogue.innerHTML = "Castle utilse sa capacité spéciale. La défense de tout le monde est augmentée.";
                    def1 = 10;
                    def2 = 10;
                    def3 = 10;
                    def4 = 10;
                    action1 = true;
                    manaHero1.innerHTML = parseInt(manaHero1.innerHTML) - 10;
                    CompetenceHeros.style.visibility='hidden';
                    cool1[2]=2;
                }

                else
                    if(manaHero1.innerHTML<10){
                        contenuBoiteDialogue.innerHTML = "Castle n'a pas assez de mana pour utiliser sa capacité spéciale.";  
                    }

            }

            else
                if(cool1[2]>0){
                    contenuBoiteDialogue.innerHTML = "Castle doit attendre le prochain tour pour faire sa capacité spéciale.";
                }

            

        }
        
    
    }
  
}

//sélection du héros "Esposito"
image2.onclick = function() {

    if(action2 == false){

        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionné Esposito. Que voulez-vous faire ?";
        boutonAttaque.style.backgroundColor = 'rgb(231, 137, 137)';
        boutonDefense.style.backgroundColor = 'rgb(78, 143, 78)';
        boutonSpecial.style.backgroundColor = 'rgb(120, 120, 202)';

        if (cool2[0]>0){

            boutonAttaque.style.backgroundColor = 'grey';
        }

        if(cool2[1]>0){

            boutonDefense.style.backgroundColor = 'grey';
        }

        if(cool2[2]>0){

            boutonSpecial.style.backgroundColor = 'grey';
        }

        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez-vous attaquer ?";
            
            imgMonstre1.onclick = function() {

                if(attaque2==false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "La guêpe subit 50 points de dégâts.";
                }

                attaque2 = true;

                action2 = true;

                cool2[0]=2;

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if(attaque2==false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le robot subit 50 points de dégâts.";
                }

                attaque2 = true;

                action2 = true;

                cool2[0]=2;

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque2==false){

                    vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "L'arbre subit 50 points de dégâts.";
                }

                attaque2 = true;

                action2 = true;

                cool2[0]=2;

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }

            CompetenceHeros.style.visibility='hidden';
        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Esposito va se protéger lors de la prochaine riposte";
            def2 = 2;
            action2 = true;
            CompetenceHeros.style.visibility='hidden';
            cool2[1]=2;
        }

        boutonSpecial.onclick = function(){

            if(manaHero2.innerHTML >= 10){

                contenuBoiteDialogue.innerHTML = "Esposito utilse sa capacité spéciale. Quel monstre doit prendre l'attaque principale ?";

                imgMonstre1.onclick = function() {

                    if(attaque2==false){
    
                        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 100;
                        vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 75;
                        vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 75;

                        contenuBoiteDialogue.innerHTML = "La guêpe subit 100 points de dégâts. Les autres subissent 75 points de dégats";
                    }
    
                    attaque2 = true;
    
                    action2 = true;

                    cool2[2]=2;
    
                    if (vieMonstre1.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                        imgMonstre1.style.visibility='hidden';
                        mortMonstre1 = true;
                    }
                    if (vieMonstre2.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                        imgMonstre2.style.visibility='hidden';
                        mortMonstre2 = true;
                    }
                    if (vieMonstre3.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                        imgMonstre3.style.visibility='hidden';
                        mortMonstre3 = true;
                    }
                }

                imgMonstre2.onclick = function() {

                    if(attaque2==false){
    
                        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 75;
                        vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 100;
                        vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 75;

                        contenuBoiteDialogue.innerHTML = "Le robot subit 100 points de dégâts. Les autres subissent 75 points de dégats";
                    }
    
                    attaque2 = true;
    
                    action2 = true;

                    cool2[2]=2;
    
                    if (vieMonstre1.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                        imgMonstre1.style.visibility='hidden';
                        mortMonstre1 = true;
                    }
                    if (vieMonstre2.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                        imgMonstre2.style.visibility='hidden';
                        mortMonstre2 = true;
                    }
                    if (vieMonstre3.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                        imgMonstre3.style.visibility='hidden';
                        mortMonstre3 = true;
                    }
                }

                imgMonstre3.onclick = function() {

                    if(attaque2==false){
    
                        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 75;
                        vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 75;
                        vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 100;

                        contenuBoiteDialogue.innerHTML = "L'arbre subit 100 points de dégâts. Les autres subissent 75 points de dégats";
                    }
    
                    attaque2 = true;
    
                    action2 = true;

                    cool2[2]=2;
    
                    if (vieMonstre1.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                        imgMonstre1.style.visibility='hidden';
                        mortMonstre1 = true;
                    }
                    if (vieMonstre2.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                        imgMonstre2.style.visibility='hidden';
                        mortMonstre2 = true;
                    }
                    if (vieMonstre3.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                        imgMonstre3.style.visibility='hidden';
                        mortMonstre3 = true;
                    }
                }

                manaHero2.innerHTML = parseInt(manaHero2.innerHTML) - 10;
                CompetenceHeros.style.visibility='hidden';
            }

            else
                if(manaHero2.innerHTML<10){
                    contenuBoiteDialogue.innerHTML = "Esposito n'a pas assez de mana pour utiliser sa capacité spéciale";  
                }

        }


    }
}

//sélection de l'héroïne "Beckett"
image3.onclick = function() {

    if(action3==false){


        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionné Beckett. Que voulez-vous faire ?";
        boutonAttaque.style.backgroundColor = 'rgb(231, 137, 137)';
        boutonDefense.style.backgroundColor = 'rgb(78, 143, 78)';
        boutonSpecial.style.backgroundColor = 'rgb(120, 120, 202)';

        if (cool3[0]>0){

            boutonAttaque.style.backgroundColor = 'grey';
        }

        if(cool3[1]>0){

            boutonDefense.style.backgroundColor = 'grey';
        }

        if(cool3[2]>0){

            boutonSpecial.style.backgroundColor = 'grey';
        }

        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez-vous attaquer ?";
            
            imgMonstre1.onclick = function() {

                if (attaque3 == false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "La guêpe subit 50 points de dégâts.";
                }
                attaque3 = true;

                action3 = true;

                cool3[0]=2;

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if(attaque3 == false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le robot subit 50 points de dégâts.";
                }
                attaque3 = true;

                action3 = true;

                cool3[0]=2;

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque3 == false){

                vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                contenuBoiteDialogue.innerHTML = "L'arbre subit 50 points de dégâts.";
                }

                attaque3 = true;

                action3 = true;

                cool3[0]=2;

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }

            CompetenceHeros.style.visibility='hidden';
        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Beckett va se protéger lors de la prochaine riposte";
            def3 = 2;
            action3 = true;
            cool3[1]= 2;
            CompetenceHeros.style.visibility='hidden';
        }

        boutonSpecial.onclick = function(){

            if(manaHero3.innerHTML >= 10){

                contenuBoiteDialogue.innerHTML = "Beckett utilse sa capacité spéciale. Quel monstre voulez vous attaquer par surprise ?";
                multiplicateur = Math.floor(Math.random() * 4)+2;
                degatBeckett = multiplicateur * 50;

                imgMonstre1.onclick = function() {

                    if (attaque3 == false){
    
                        vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - degatBeckett;
                        contenuBoiteDialogue.innerHTML = "La guêpe subit " + degatBeckett + " points de dégâts.";
                    }
                    attaque3 = true;
    
                    action3 = true;

                    cool3[2]= 2;
    
                    if (vieMonstre1.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                        imgMonstre1.style.visibility='hidden';
                        mortMonstre1 = true;
                    }
                }

                imgMonstre2.onclick = function() {

                    if(attaque3 == false){
    
                        vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - degatBeckett;
                        contenuBoiteDialogue.innerHTML = "Le robot subit " + degatBeckett + " points de dégâts.";
                    }
                    attaque3 = true;
    
                    action3 = true;

                    cool3[2]= 2;
    
                    if (vieMonstre2.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                        imgMonstre2.style.visibility='hidden';
                        mortMonstre2 = true;
                    }
                }
    
                imgMonstre3.onclick = function() {
    
                    if(attaque3 == false){
    
                    vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - degatBeckett;
                    contenuBoiteDialogue.innerHTML = "L'arbre subit " + degatBeckett + " points de dégâts.";
                    }
    
                    attaque3 = true;
    
                    action3 = true;

                    cool3[2]= 2;
    
                    if (vieMonstre3.innerHTML <= 0) {
                        contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                        imgMonstre3.style.visibility='hidden';
                        mortMonstre3 = true;
                    }
                }

                manaHero3.innerHTML = parseInt(manaHero3.innerHTML) - 10;
                CompetenceHeros.style.visibility='hidden';
            }

            else
                if(manaHero3.innerHTML<10){
                    contenuBoiteDialogue.innerHTML = "Beckett n'a pas assez de mana pour utiliser sa capacité spéciale";  
                }

        }

    }
}

//sélection du héros "Ryan"
image4.onclick = function() {

    if (action4==false){

        CompetenceHeros.style.visibility='visible';
        contenuBoiteDialogue.innerHTML = "Vous avez sélectionné Ryan. Que voulez-vous faire ?";
        boutonAttaque.style.backgroundColor = 'rgb(231, 137, 137)';
        boutonDefense.style.backgroundColor = 'rgb(78, 143, 78)';
        boutonSpecial.style.backgroundColor = 'rgb(120, 120, 202)';

        if (cool4[0]>0){

            boutonAttaque.style.backgroundColor = 'grey';
        }

        if(cool4[1]>0){

            boutonDefense.style.backgroundColor = 'grey';
        }

        if(cool4[2]>0){

            boutonSpecial.style.backgroundColor = 'grey';
        }

        boutonAttaque.onclick = function() {

            contenuBoiteDialogue.innerHTML = "Vous avez choisi d'attaquer. Qui voulez-vous attaquer ?";
            
            imgMonstre1.onclick = function() {

                if(attaque4 == false){

                    vieMonstre1.innerHTML = parseInt(vieMonstre1.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "La guêpe subit 50 points de dégâts.";
                }

                attaque4 = true;

                action4 = true;

                cool4[0]=2;

                if (vieMonstre1.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "La guêpe a été tuée.";
                    imgMonstre1.style.visibility='hidden';
                    mortMonstre1 = true;
                }
            }
            
            imgMonstre2.onclick = function() {

                if(attaque4 == false){

                    vieMonstre2.innerHTML = parseInt(vieMonstre2.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "Le robot subit 50 points de dégâts.";
                }

                attaque4 = true;

                action4 = true;

                cool4[0]=2;

                if (vieMonstre2.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "Le robot a été tué.";
                    imgMonstre2.style.visibility='hidden';
                    mortMonstre2 = true;
                }
            }

            imgMonstre3.onclick = function() {

                if(attaque4 == false){

                    vieMonstre3.innerHTML = parseInt(vieMonstre3.innerHTML) - 50;
                    contenuBoiteDialogue.innerHTML = "L'arbre subit 50 points de dégâts.";
                }

                attaque4= true;

                action4 = true;

                cool4[0]=2;

                if (vieMonstre3.innerHTML <= 0) {
                    contenuBoiteDialogue.innerHTML = "L'arbre a été tué.";
                    imgMonstre3.style.visibility='hidden';
                    mortMonstre3 = true;
                }
            }

            CompetenceHeros.style.visibility='hidden';

        }

        boutonDefense.onclick = function(){

            contenuBoiteDialogue.innerHTML = "Vous avez choisi de vous défendre, Ryan va se protéger lors de la prochaine riposte";
            def4 = 2;
            action4 = true;
            cool4[1]=2;
            CompetenceHeros.style.visibility='hidden';

        }

        boutonSpecial.onclick = function(){

            if(manaHero4.innerHTML >= 10){

                contenuBoiteDialogue.innerHTML = "Ryan utilse sa capacité spéciale. La vie de tout le monde remonte.";

                vieHero1.innerHTML = parseInt(vieHero1.innerHTML) +10;
                vieHero2.innerHTML = parseInt(vieHero2.innerHTML) +10;
                vieHero3.innerHTML = parseInt(vieHero3.innerHTML) +10;
                vieHero4.innerHTML = parseInt(vieHero4.innerHTML) +10;

                action4 = true;
                cool4[2]=2;
                manaHero4.innerHTML = parseInt(manaHero4.innerHTML) - 10;
                CompetenceHeros.style.visibility='hidden';
            }

            else
                if(manaHero4.innerHTML<10){
                    contenuBoiteDialogue.innerHTML = "Ryan n'a pas assez de mana pour utiliser sa capacité spéciale";  
                }

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
                        degat1 = 10 / def1
                        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - degat1;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Castle et lui inflige " + degat1 + " points de dégâts";


                        if (vieHero1.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Castle a été tué.";
                            statHero1.style.visibility='hidden';
                            mortHeros1 = true
                        }
                    }
                    if ((cible == 2) && (mortHeros2 == false)){
                        degat1 = 10 / def2
                        vieHero2.innerHTML = parseInt(vieHero2.innerHTML) - degat1;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Esposito et lui inflige " + degat1 + " points de dégâts";


                        if (vieHero2.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Esposito a été tué.";
                            statHero2.style.visibility='hidden';
                            mortHeros2 = true
                        }
                    }
                    if ((cible == 3) && (mortHeros3 == false)){
                        degat1 = 10 / def3
                        vieHero3.innerHTML = parseInt(vieHero3.innerHTML) - degat1;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Beckett et lui inflige " + degat1 + " points de dégâts";

                         
                        if (vieHero3.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Beckett a été tué.";
                            statHero3.style.visibility='hidden';
                            mortHeros3 = true
                        }
                    }
                    if ((cible == 4) && (mortHeros4 == false)){
                        degat1 = 10 / def4
                        vieHero4.innerHTML = parseInt(vieHero4.innerHTML) - degat1;
                        contenuBoiteDialogue.innerHTML = "La guêpe attaque Ryan et lui inflige " + degat1 + " points de dégâts";


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
                        degat2 = 10 / def1
                        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - degat2;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Castle et lui inflige " + degat2 + " points de dégâts";


                        if (vieHero1.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Castle a été tué.";
                            statHero1.style.visibility='hidden';
                            mortHeros1 = true
                        }
                    }
                    if ((cible == 2) && (mortHeros2 == false)){
                        degat2 = 10 / def2
                        vieHero2.innerHTML = parseInt(vieHero2.innerHTML) - degat2;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Esposito et lui inflige " + degat2 + " points de dégâts";


                        if (vieHero2.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Esposito a été tué.";
                            statHero2.style.visibility='hidden';
                            mortHeros2 = true
                        }
                    }
                    if ((cible == 3) && (mortHeros3 == false)){
                        degat2 = 10 / def3
                        vieHero3.innerHTML = parseInt(vieHero3.innerHTML) - degat2;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Beckett et lui inflige " + degat2 + " points de dégâts";


                        if (vieHero3.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Beckett a été tué.";
                            statHero3.style.visibility='hidden';
                            mortHeros3 = true
                        }
                    }
                    if ((cible == 4) && (mortHeros4 == false)){
                        degat2 = 10 / def4
                        vieHero4.innerHTML = parseInt(vieHero4.innerHTML) - degat2;
                        contenuBoiteDialogue.innerHTML = "Le robot attaque Ryan et lui inflige " + degat2 + " points de dégâts";


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
                        degat3 = 10 / def1
                        vieHero1.innerHTML = parseInt(vieHero1.innerHTML) - degat3;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Castle et lui inflige " + degat3 + " points de dégâts";


                        if (vieHero1.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Castle a été tué.";
                            statHero1.style.visibility='hidden';
                            mortHeros1 = true
                        }
                    }
                    if ((cible == 2) && (mortHeros2 == false)){
                        degat3 = 10 / def2
                        vieHero2.innerHTML = parseInt(vieHero2.innerHTML) - degat3;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Esposito et lui inflige " + degat3 + " points de dégâts";


                        if (vieHero2.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Esposito a été tué.";
                            statHero2.style.visibility='hidden';
                            mortHeros2 = true
                        }
                    }
                    if ((cible == 3) && (mortHeros3 == false)){
                        degat3 = 10 / def3
                        vieHero3.innerHTML = parseInt(vieHero3.innerHTML) - degat3;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Beckett et lui inflige " + degat3 + " points de dégâts";


                        if (vieHero3.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Beckett a été tué.";
                            statHero3.style.visibility='hidden';
                            mortHeros3 = true
                        }
                    }
                    if ((cible == 4) && (mortHeros4 == false)){
                        degat3 = 10 / def4
                        vieHero4.innerHTML = parseInt(vieHero4.innerHTML) - degat3;
                        contenuBoiteDialogue.innerHTML = "L'arbre attaque Ryan et lui inflige " + degat3 + " points de dégâts";


                        if (vieHero4.innerHTML <= 0) {
                            contenuBoiteDialogue.innerHTML = "Ryan a été tué.";
                            statHero4.style.visibility='hidden';
                            mortHeros4 = true
                        }
                    }
                }

            },7000);
            // réinitialistion des statistiques
            action1 = false
            action2 = false
            action3 = false
            action4 = false
            
            attaque1 = false
            attaque2 = false
            attaque3 = false
            attaque4 = false


            // cooldown Héros 1
            if(cool1[0]>0){
                cool1[0]=cool1[0]-1
            }

            if(cool1[1]>0){
                cool1[1]=cool1[1]-1
            }

            if(cool1[2]>0){
                cool1[2]=cool1[2]-1
            }

            // cooldown Héros 2
            if(cool2[0]>0){
                cool2[0]=cool2[0]-1
            }

            if(cool2[1]>0){
                cool2[1]=cool2[1]-1
            }

            if(cool2[2]>0){
                cool2[2]=cool2[2]-1
            }

            // cooldown Héros 3
            if(cool3[0]>0){
                cool3[0]=cool3[0]-1
            }

            if(cool3[1]>0){
                cool3[1]=cool3[1]-1
            }

            if(cool3[2]>0){
                cool3[2]=cool3[2]-1
            }

            // cooldown Héros 4
            if(cool4[0]>0){
                cool4[0]=cool4[0]-1
            }

            if(cool4[1]>0){
                cool4[1]=cool4[1]-1
            }

            if(cool4[2]>0){
                cool4[2]=cool4[2]-1
            }


            setTimeout(() => {
            
                contenuBoiteDialogue.innerHTML = "C'est à vous de jouer. Choisissez un héros";

                def1 = 1
                def2 = 1
                def3 = 1
                def4 = 1

            },9000);


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
