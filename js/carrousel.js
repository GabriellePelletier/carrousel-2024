(function () {
  // Toutes les références des classes et des parties html
  // console.log("Vive Javascript!");
  let carrousel = document.querySelector(".carrousel");
  // console.log("conteneur carrousel = " + carrousel.tagName);

  let bouton = document.querySelector(".bouton__ouvrir");
  // console.log("bouton carrousel = " + bouton.tagName);

  let carrousel__x = document.querySelector(".carrousel__x");
  // console.log("carrousel__x = " + carrousel__x.tagName);

  let galerie = document.querySelector(".galerie");
  // console.log("galerie" + galerie.tagName);

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
  // console.log("La galerie des images = " + galerie__img);
  let index = 0;
  for (const elm of galerie__img) {
    // console.log(elm.src);
    // Création dynamique d'une image du carrousel
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index);
    index = index + 1;
  }

  // Add arrow buttons
  let prevArrow = document.createElement("button");
  prevArrow.classList.add("carrousel__arrow", "carrousel__arrow--prev");
  prevArrow.innerHTML = "&lt;";
  carrousel.appendChild(prevArrow);

  let nextArrow = document.createElement("button");
  nextArrow.classList.add("carrousel__arrow", "carrousel__arrow--next");
  nextArrow.innerHTML = "&gt;";
  carrousel.appendChild(nextArrow);

  // Add event listeners to arrow buttons
  prevArrow.addEventListener("click", function () {
    index = (index - 1 + galerie__img.length) % galerie__img.length;
    update_carrousel();
  });

  nextArrow.addEventListener("click", function () {
    index = (index + 1) % galerie__img.length;
    update_carrousel();
  });

  function update_carrousel() {
    let carrousel__img = document.querySelector(
      `.carrousel__figure img[data-index='${index}']`
    );
    carrousel__img.classList.add("carrousel_voir");
    let otherImages = document.querySelectorAll(
      ".carrousel__img:not([data-index='" + index + "'])"
    );
    for (let i = 0; i < otherImages.length; i++) {
      otherImages[i].classList.remove("carrousel_voir");
    }
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
    let carrousel__form = document.querySelector(".carrousel__form");
    // console.log("Voici le résultat : " + carrousel__form);
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

    // console.log("Résultat console.log append child = " + carrousel__form);
    // ajouter un écouteur qui permettra de changer l'opacité de l'image "index"

    // J'ai eu l'aide de 'Codedamn.com' pour trouver cette solution
    carrousel_radio.addEventListener("click", function () {
      // Change the image based on the radio button index
      let index = this.dataset.index;
      let carrousel__img = document.querySelector(
        `.carrousel__figure img[data-index='${index}']`
      );
      carrousel__img.classList.add("carrousel_voir");
      let otherImages = document.querySelectorAll(
        ".carrousel__img:not([data-index='" + index + "'])"
      );
      for (let i = 0; i < otherImages.length; i++) {
        otherImages[i].classList.remove("carrousel_voir");
      }
    });
  }

  // console.log("Première image dans la galerie : " + galerie__img[0].src);

  // carrousel__img.src = galerie__img.src;
  // console.log("Première image du carrousel: " + carrousel_radio.src);

  // carrousel__figure.appendChild(carrousel__img);
  // console.log(carrousel__figure);
})();
