(function () {
  console.log("Vive Javascript!");
  let carrousel = document.querySelector(".carrousel");
  console.log("conteneur carrousel = " + carrousel.tagName);

  let bouton = document.querySelector(".bouton__ouvrir");
  console.log("conteneur carrousel = " + bouton.tagName);

  let carrousel__x = document.querySelector(".carrousel__x");
  console.log("carrousel__x" + carrousel__x.tagName);

  // Écouteur pour ouvrir la boite modale

  bouton.addEventListener("mousedown", function () {
    carrousel.classList.add("carrousel--ouvrir");
  });

  // Écouteur pour fermer la boite modale

  carrousel__x.addEventListener("mousedown", function () {
    carrousel.classList.remove("carrousel--ouvrir");
  });
})();
