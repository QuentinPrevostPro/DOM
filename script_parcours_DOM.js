console.log("1. Nombre d'éléments <p>")
console.log(document.getElementsByTagName("p").length)

console.log("2. Texte de l'id coucou")
console.log(document.getElementById("coucou").textContent)

console.log("3. URL de la 3ème balise <a>'")
console.log(document.getElementsByTagName("a")[2].href)

console.log("4. Nombre d'éléments avec la classe compte-moi")
console.log(document.getElementsByClassName("compte-moi").length)

console.log("5. Nombre d'éléments li avec la classe compte-moi")
console.log(document.querySelectorAll("li.compte-moi").length)

console.log("6. Nombre d'éléments li d'une liste ordonnée avec la classe compte-moi")
console.log(document.querySelectorAll("ol li.compte-moi").length)

console.log("8. Jeu de piste")
console.log(document.getElementsByTagName("div")[0].getElementsByTagName("ul")[1].querySelector("li").textContent)