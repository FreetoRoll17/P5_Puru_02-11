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
    let couleurProduit = document.createElement("option");
    document.getElementById("colors").appendChild(couleurProduit);
    couleurProduit.value = colors;
    couleurProduit.innerHTML = colors;
  }
  addToCart(kanap);
}

//Gestion du panier
function addToCart(kanap) {
  const ajouterPanier = document.getElementById("addToCart");
  ajouterPanier.addEventListener("click", (event) => {
    //if (document.getElementById("quantity").value > 0 && document.getElementById("quantity").value <=100 && document.getElementById("quantity").value != 0){
    let choixCouleur = document.getElementById("colors").value;
    if (choixCouleur === "Choisissez la couleur") {
      document.getElementById("color-error").style.display = "block";
      return;
    }else {
      document.getElementById("color-error").style.display = "none";
    }
    let choixQuantite = document.getElementById("quantity").value;
    if (choixQuantite == 0) {
      document.getElementById("quantity-error").style.display = "block";
      return;
    }
    //valeur à transférer dans l'array
    let optionsProduit = {
      idProduit: idProduit,
      couleurProduit: choixCouleur,
      quantiteProduit: Number(choixQuantite),
      nomProduit: kanap.name,
      prixProduit: kanap.price,
      descriptionProduit: kanap.description,
      imgProduit: kanap.imageUrl,
      altImgProduit: kanap.altTxt
    };

    //convertir en JSON
    let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));


    //Importation dans le local storage
    //Si déjà 1 article minimum
    if (produitLocalStorage) {
      const produitPanier = produitLocalStorage.find(
        (element) => element.idProduit === idProduit && element.couleurProduit === choixCouleur);
      //déjà dans le panier
      if (produitPanier) {
        let newQuantite =
          parseInt(optionsProduit.quantiteProduit) + parseInt(produitPanier.quantiteProduit);
        produitPanier.quantiteProduit = newQuantite;
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



/*

     Deuxième esssai 
    (async function () {
        const itemId = getItemId()
        const itemData = await getItemData(itemId)
        displayItem(itemData)
      })()
      
      function getItemId() {
        return new URL(document.location.href).searchParams.get('id')
      }
      

      
      function getItemData(itemId) {
        return fetch("http://localhost:3000/api/products/" + itemId)
          .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
          })
          
      }


      function displayItem(itemData) {
        document.getElementById("title").textContent = itemData.name
        document.getElementById("description").textContent = itemData.description;
        document.getElementById('price').innerText = itemData.price;
        document.getElementById('price').value = itemData.price;
        
        //document.querySelector('option').innerHTML = itemData.colors[""];
        document.getElementById('imageUrl').src = itemData.imageUrl;
        document.getElementById('imageUrl').value = itemData.imageUrl;
        document.getElementById('optionColor').innerHTML = itemData.colors[1];
        document.getElementById('ref').value = itemData._id;
        document.getElementById('title').value = itemData.name;
      }

     //TEST LOCAL STORAGE
     
     //Troisième essai, pour avoir un seul array dans LocalStorage







  




        const ajouterPanier = document.getElementById("addToCart");
        //console.log(ajouterPanier)
        
      
        ajouterPanier.addEventListener("click", (event) => {
          event.preventDefault;

          

          var produitChoisi = {
            modele:  title,
            image: imageUrl,
            prix: price, //= price,
            couleur: colors,
            quantite: Number(quantity),//localStorage.setItem("quantite",document.getElementById('quantity').value),
            id: ref,
          }

          var produitChoisi = JSON.stringify(produitChoisi)

          var produitAjoute = "produitAjouté_";
          var produitAjouteId = localStorage.length+1;
          localStorage[produitAjoute + produitAjouteId] = produitChoisi;
          
          return false;
           
        })
          
         */


/* 

Premier essai 

  localStorage.setItem("quantite",document.getElementById('quantity').value);
  localStorage.setItem("couleur",document.getElementById('colors').value);
  localStorage.setItem("id produit",document.getElementById('ref').value);
  localStorage.setItem("prix",document.getElementById('price').value);
  localStorage.setItem("nom",document.getElementById('title').value);
  localStorage.setItem("image",document.getElementById('imageUrl').value);
*/