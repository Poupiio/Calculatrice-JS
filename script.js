// chaque touche a un keycode. On peut le trouver sur keycode.info

// récupérer les éléments du DOM :
const touches = [...document.querySelectorAll('.bouton')];
console.log(touches);
const ecran = document.querySelector('.ecran');


/* const nouveauTab = tableau.map(element => faireQqch(element));
    La fonciton map() prend chaque élément d'un talbeau, 
    fait quelque chose à cet élément (fonction callback) et
    retourne le résultat sous forme d'un nouveau tableau
    (dans cet exemple la variable nouveauTab) 
    
    EXEMPLE 2 :
const tableau = [3, 5, 9];
    Dans ce tableau, on souhaite prendre chaque élément et retourner une valeur double dans un nouveau tableau.
const nouveauTableau = tableau.map(element => element * 2);
console.log(tableau);       // prints [3, 5, 9]
console.log(nouveauTableau);        // prints [6, 10, 18]
    */

const listeKeycode = touches.map(touche => touche.dataset.key);     // dataset sert à récupérer le data-key qu'on a mis en HTML, et key correspond au nom qu'on a choisi
console.log(listeKeycode);      // ça va donc nous afficher tous les keycode de chaque élément du tableau touches


document.addEventListener('keydown', (e) => {
    const valeur = e.code;      // KeyboardEvent.keyCode est devenu obsolète, on le remplace par KeyboardEvent.code
    console.log(valeur, typeof valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;    // on récupère la touche grâce .target
    console.log(valeur, typeof valeur);     // on utilise type of pour vérifier que c'est une string
    calculer(valeur);
});


/* Méthode includes()
    const animaux = ['chat', 'chien', 'cheval'];
    console.log(animaux.includes('chat'));
=> On vérifie ainsi si le tableau contient la valeur "chat"
Ce morceau de code retourne TRUE

    const animaux = ['chat', 'chien', 'cheval'];
    console.log(animaux.includes('crocodile')); 
Ce morceau de code retourne FALSE puisque 'crocodile' n'est pas dans le tableau animaux */

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        console.log(listeKeycode);      // n'affichera rien si on appuie sur une touche autre que celles définies dans notre calculette
        switch(valeur) {
            case '8':
                ecran.textContent ="";
                break;
            case '13':
                const calcul = eval(ecran.textContent);     // eval() est une fonction qui calcule ce que l'on met dans les (), ici elle va calculer ce qui est écrit dans la case écran
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }

};

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul: ' + e.message);
});