(function () {
  // Toutes les références des classes et des parties html
  // console.log("Vive Javascript!");
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
  let galerie__img = galerie.querySelectorAll("img");
  console.log(galerie__img);
  let index = 0;
  for (const elm of galerie__img) {
    // console.log(elm.src);
    // Création dynamique d'une image du carrousel
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index);
    index = index + 1;
  }

  /**
   * Créer l'image du carrousel dans la galerie
   * @param {*} index le numéro de l'image
   */
  function creer_image_carrousel(index, elm) {
    let carrousel__img = document.createElement("img");
    carrousel__img.src = elm.src;
    carrousel__img.classList.add("carrousel__img");
    carrousel__img.dataset.index = index;
    carrousel__figure.appendChild(carrousel__img);
  }

  /**
   * Création d'un radio-bouton du carrousel
   * @param {*} index le numéro de l'image
   */
  function creer_radio_carrousel(index) {
    let carrousel_radio = document.createElement("input");
    let carrousel__form = document.querySelector("form");
    console.log("Voici le résultat : " + carrousel__form);
    // class
    carrousel_radio.classList.add("carousel");
    // index
    carrousel_radio.dataset.index = index;
    // type
    carrousel_radio.setAttribute("type", "radio");
    // name
    carrousel_radio.setAttribute("name", "carrousel__radio");
    // ajouter dans carrousel__form
    carrousel__form.appendChild(carrousel_radio);
    // ajouter un écouteur qui permettra de changer l'opacité de l'image "index"
    carrousel__img.children[index].style.opacity = 1;
  }

  console.log("Première image dans la galerie : " + galerie__img.src);

  carrousel__img.src = galerie__img.src;
  console.log("Première image du carrousel: " + galerie__img.src);

  // carrousel__figure.appendChild(carrousel__img);
  // console.log(carrousel__figure);
})();
