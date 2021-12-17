/*
var nomProduit = localStorage.getItem("produitChoisi").modele;
console.log(nomProduit)
var prixProduit = localStorage.getItem("prix");
var couleurProduit = localStorage.getItem("couleur");
var imageProduit = localStorage.getItem("image");
var quantiteProduit = localStorage.getItem("quantite");
console.log(quantiteProduit);
*/


let produitEnregistre = JSON.parse(localStorage.getItem('produit'));
console.log(produitEnregistre)

function getCart() {
    if (produitEnregistre === null || produitEnregistre == 0) {
        const panierVide = `<p>Veuillez choisir au moins un canapé.</p>`;
        document.getElementById("cart__items").innerHTML = panierVide;
    } else {

        let countProduct = 0;
        let totalPrice = 0;



        for (let produit of produitEnregistre) {
            let produitArticle = document.createElement("article");
            document.getElementById("cart__items").appendChild(produitArticle);
            produitArticle.className = "cart__item";
            /* Premier essai
        let produitImg = document.createElement("div");
        produitArticle.appendChild(produitImg);
        produitImg.className = "cart__item__img";

        let kanapImg = document.createElement("img");
        produitImg.appendChild(kanapImg);
        kanapImg.src = produitEnregistre[produit].imgProduit;

        let produitItemContent = document.createElement("div");
        produitArticle.appendChild(produitItemContent);
        produitItemContent.className = "cart__item__content";

        let produitDescription = document.createElement("div");
        produitItemContent.appendChild(produitDescription);
        produitItemContent.className = "cart__item__content__description";
  
        let produitTitre = document.createElement("h2");
        produitDescription.appendChild(produitTitre);
        produitTitre.innerHTML = produitEnregistre[produit].nomProduit;
   
        let produitColor = document.createElement("p");
        produitDescription.appendChild(produitColor);
        produitColor.innerHTML = produitEnregistre[produit].couleurProduit;

        let produitPrix = document.createElement("p");
        produitDescription.appendChild(produitPrix);
        produitPrix.innerHTML = produitEnregistre[produit].prixProduit+"€";

        let produitSetting = document.createElement("div");
        produitArticle.appendChild(produitSetting),
        produitSetting.className= "cart__item__content__settings"

        let produitSettingQuantity = document.createElement("div");
        produitSetting.appendChild(produitSettingQuantity),
        produitSettingQuantity.className= "cart__item__content__settings__quantity" 
        
      */
            produitArticle.innerHTML = `<div class="cart__item__img">
                  <img id="imageProduit" src="${produit.imgProduit}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2 id="nom">${produit.nomProduit}</h2>
                    <p id="couleur">${produit.couleurProduit}</p>
                    <p id="prix">${produit.prixProduit}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p id="quantite">Qté : </p>
                      <input type="number" class="itemQuantity" id="itemQuantity"name="itemQuantity" min="1" max="100" value="${produit.quantiteProduit}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>`


            countProduct = countProduct + produit.quantiteProduit;
            totalPrice = totalPrice + (produit.prixProduit * produit.quantiteProduit);

        }

        document.getElementById("totalQuantity").innerHTML = countProduct;
        document.getElementById("totalPrice").innerHTML = totalPrice;


    }
    // Modification d'une quantité de produit
    function modifyQuantity() {
        let qttModif = document.getElementsByClassName("itemQuantity");

        for (let k = 0; k < qttModif.length; k++) {
            qttModif[k].addEventListener("change", (event) => {
                event.preventDefault();

                //Selection de l'element à modifier en fonction de son id ET sa couleur
                let quantityModif = produitEnregistre[k].quantiteProduit;
                let quantityChangeValue = qttModif[k].valueAsNumber;

                const resultFind = produitEnregistre.find((element) => element.qttModifValue !== quantityModif);

                resultFind.quantiteProduit = quantityChangeValue;
                produitEnregistre[k].quantiteProduit = resultFind.quantiteProduit;

                localStorage.setItem("produit", JSON.stringify(produitEnregistre));
                location.reload();
            })
        }
    }
    modifyQuantity();
    // Suppression d'un produit
    function deleteProduct() {
        let btn_supprimer = document.getElementsByClassName("deleteItem");

        for (let i = 0; i < btn_supprimer.length; i++) {
            btn_supprimer[i].addEventListener("click", (event) => {
                event.preventDefault();

                //Selection de l'element à supprimer en fonction de son id ET sa couleur
                let idDelete = produitEnregistre[i].idProduit;
                let colorDelete = produitEnregistre[i].couleurProduit;

                produitEnregistre = produitEnregistre.filter(element => element.idProduit !== idDelete || element.couleurProduit !== colorDelete);

                localStorage.setItem("produit", JSON.stringify(produitEnregistre));
                location.reload();
            })
        }
    }
    deleteProduct();



}
getCart();

/*
//Instauration formulaire avec regex
function getForm() {
    // Ajout des Regex
    let form = document.querySelector(".cart__order__form");

    //Création des expressions régulières
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

*/

// Test ajout formulaire
//function addForm() {
const btn_commander = document.getElementById("order");
btn_commander.addEventListener("click", (event) => {
    event.preventDefault();

    const clientInform = {

        Prenom: document.getElementById("firstName").value,
        Nom: document.getElementById("lastName").value,
        Adresse: document.getElementById("address").value,
        Ville: document.getElementById("city").value,
        Email: document.getElementById("email").value
    }

    //validation prénom
    function checkPrenom() {
        const prenom = clientInform.Prenom;
        if (/^[A-Za-z]{3,25}$/.test(prenom)) {
            console.log("ok");
            return true;
        } else {
            console.log("error");
            alert("Veuillez contrôler les informations saisies")
            return false
        }
    }

    //validation nom
    function checkNom() {
        const nom = clientInform.Nom;
        if (/^[A-Za-z]{3,25}$/.test(nom)) {
            console.log("ok");
            return true;
        } else {
            console.log("error");
            alert("Veuillez contrôler les informations saisies")
            return false
        }
    }


    //validation ville
    function checkVille() {
        const ville = clientInform.Ville;
        if (/^[A-Za-z]{3,25}$/.test(ville)) {
            console.log("ok");
            return true;
        } else {
            console.log("error");
            alert("Veuillez contrôler les informations saisies")
            return false
        }
    }

    if (checkPrenom() && checkNom() && checkVille())  {
        localStorage.setItem("clientInform", JSON.stringify(clientInform));
    } else {}
    //LS 


    const envoiLs = {
        produitEnregistre,
        clientInform
    }
})

/*
        localStorage.setItem("prenom", document.getElementById("firstName").value);
        localStorage.setItem("nom", document.getElementById("lastName").value);
        localStorage.setItem("adresse", document.getElementById("address").value);
        localStorage.setItem("ville", document.getElementById("city").value);
        localStorage.setItem("email", document.getElementById("email").value);
        
        
        const infoClient = {
                
                    Prenom: localStorage.getItem("prenom"),
                    Nom: localStorage.getItem("nom"),
                    Adresse: localStorage.getItem("adresse"),
                    Ville: localStorage.getItem("ville"),
                    Email: localStorage.getItem("email")
                }

                console.log(infoClient);

    }
    )

    //envoyer vers LS
    const aEnvoyer = {
        produitEnregistre,
        infoClient
    }

    */



/*
let idProducts = [];
for (let i = 0; i<produitEnregistre.length;i++) {
    idProducts.push(produitEnregistre[i].idProduit);
}
console.log(idProducts);
*/

//valeur à transférer dans l'array









//calcul panier : 



/*
document.getElementById("nom").innerHTML = nomProduit;
document.getElementById("prix").innerHTML = prixProduit+"€";
document.getElementById("couleur").innerHTML = couleurProduit;
document.getElementById("imageProduit").src = imageProduit;
document.getElementById("itemQuantity").value = quantiteProduit;
*/

/*
window.onload = function () {
document.getElementById("title").innerHTML = storageTitle;
}
*/