function changeTitle() {
  document.getElementsByClassName("jumbotron-heading")[0].innerHTML = "Ce que j'ai appris à THP";
  document.getElementsByClassName("lead text-muted")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}

function changeCallToActions() {
  document.querySelector("a.btn-primary").innerHTML = "OK je veux tester !";
  document.querySelector("a.btn-primary").href = "http://www.thehackingproject.org";
  document.querySelector("a.btn-secondary").innerHTML = "Non Merci"
  document.querySelector("a.btn-secondary").href = "https://www.pole-emploi.fr/accueil/"
}

function changeLogoName() {
  document.getElementsByTagName("strong")[0].innerHTML = "The THP Experience";
  document.getElementsByTagName("strong")[0].style.fontSize = "2em";
}

function populateImages() {
  let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
  imagesArray.forEach(image => {
    document.getElementsByTagName("img")[imagesArray.indexOf(image)].src = image;
  })
}

function deleteLastCards() {
  let elts = document.getElementsByClassName("col-md-4")
  let initLength = elts.length
  while (elts.length > initLength - 3) {
    elts[elts.length-1].remove();
  }
}

function changeCardsText() {
  let elts = document.getElementsByClassName("card-text")
  let textContent = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web","Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML","JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
  for (let i = 0; i < 3; i++) {
    elts[i].innerHTML = textContent[i]
  }
}

function changeViewButtons() {
  elts = document.getElementsByClassName("btn-group")
  for (let i = 0; i < elts.length; i++) {
    elts[i].children[0].classList.remove("btn-outline-secondary")
    elts[i].children[0].classList.add("btn-success") 
  }
}

// Exécution des fonctions
changeTitle()
changeCallToActions()
changeLogoName()
populateImages()
deleteLastCards()
changeCardsText()
changeViewButtons()