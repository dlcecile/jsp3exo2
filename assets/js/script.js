var links =  document.querySelectorAll('a');//selectionne les liens

links[0].addEventListener('click', function(){//ajoute à l'évènement click la fonction faire apparaitre le texte
    text.style.visibility = 'visible';
})
links[1].addEventListener('click', function(){//masque le texte
    text.style.visibility = 'hidden';
})
