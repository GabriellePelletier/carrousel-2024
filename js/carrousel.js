(function () {
  // Toutes les références des classes et des parties html
  console.log("Vive Javascript!");
  let carrousel = document.querySelector(".carrousel");
  console.log("conteneur carrousel = " + carrousel.tagName);

  let bouton = document.querySelector(".bouton__ouvrir");
  console.log("conteneur carrousel = " + bouton.tagName);

  let carrousel__x = document.querySelector(".carrousel__x");
  console.log("carrousel__x" + carrousel__x.tagName);

  let galerie = document.querySelector(".galerie");
  console.log("galerie" + galerie.tagName);

  // Écouteur pour ouvrir la boite modale
  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });

  // Écouteur pour fermer la boite modale
  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });

  // Création dynamique d'une image du carrousel
  let carrousel__img = document.createElement("img");
  carrousel__img.classList.add("carrousel__img");

  let carrousel__figure = document.querySelector(".carrousel__figure");

  // Création du carrousel
  // Récupère seulement la première image de la galerie
  let galerie__img = galerie.querySelector("img");
  console.log(galerie__img);
  for (const elm of galerie__img) {
    console.log(elm.src);
  }

  // console.log("Première image dans la galerie : " + galerie__img.src);

  // carrousel__img.src = galerie__img.src;
  // console.log("Première image du carrousel: " + galerie__img.src);

  // carrousel__figure.appendChild(carrousel__img);
  // console.log(carrousel__figure);
})();
