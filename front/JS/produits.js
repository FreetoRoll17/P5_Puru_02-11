var loc = window.location.href;
var url = new URL(loc);
var idProduit = url.searchParams.get("id");
let kanap = "";

getArticle();

function getArticle() {
  fetch("http://localhost:3000/api/products/" + idProduit)
    .then((res) => {
      return res.json();
    })

    .then(async function (retourAPI) {
      kanap = await retourAPI;
      if (kanap) {
        produitSelectionne(kanap);
      }
    })
}

// API vers page produit

function produitSelectionne(kanap) {
  let imageProduit = document.createElement("img");
  document.getElementById("item__img").appendChild(imageProduit);
  imageProduit.src = kanap.imageUrl;
  imageProduit.alt = kanap.altTxt;


  document.getElementById('title').innerHTML = kanap.name;
  document.getElementById('price').innerHTML = kanap.price;
  document.getElementById('description').innerHTML = kanap.description;

  for (let colors of kanap.colors) {
    let color = document.createElement("option");
    document.getElementById("colors").appendChild(color);
    color.value = colors;
    color.innerHTML = colors;
  }
  addToCart(kanap);
}

//Gestion du panier
function addToCart(kanap) {
  const ajouterPanier = document.getElementById("addToCart");
  ajouterPanier.addEventListener("click", (event) => {

    let choixCouleur = document.getElementById("colors").value;
    if (choixCouleur === "Choisissez la couleur") {
      document.getElementById("color-error").style.display = "block";
      return;
    } else {
      document.getElementById("color-error").style.display = "none";
    }
    let choixQuantite = document.getElementById("quantity").value;
    if (choixQuantite == 0) {
      document.getElementById("quantity-error").style.display = "block";
      return;
    }
    //valeur à transférer dans l'array
    let optionsProduit = {
      id: idProduit,
      color: choixCouleur,
      quantity: Number(choixQuantite),
      name: kanap.name,
      price: kanap.price,
      description: kanap.description,
      image: kanap.imageUrl,
      altImage: kanap.altTxt
    };

    //convertir en JSON
    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));


    //Importation dans le local storage
    //Si déjà 1 article minimum
    if (produitLocalStorage) {
      const produitPanier = produitLocalStorage.find(
        (element) => element.idProduit === idProduit && element.color === choixCouleur);
      //déjà dans le panier
      if (produitPanier) {
        let newQuantity =
        parseInt(optionsProduit.quantity) + parseInt(produitPanier.quantity);
        produitPanier.quantity = newQuantity;
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
        //pas encore dans le panier
      } else {
        produitLocalStorage.push(optionsProduit);
        localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
      }
      //Si le panier est vide
    } else {
      produitLocalStorage = [];
      produitLocalStorage.push(optionsProduit);
      localStorage.setItem("produit", JSON.stringify(produitLocalStorage));
    }
  })
};

