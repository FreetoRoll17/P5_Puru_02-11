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


    const contact = {

        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        address: document.getElementById("address").value,
        city: document.getElementById("city").value,
        email: document.getElementById("email").value
    }

    let idProducts = [];
    for (let i = 0; i < produitEnregistre.length; i++) {
        idProducts.push(produitEnregistre[i].idProduit);
    }



    //validation prénom
    function checkPrenom() {
        const prenom = contact.firstName;
        if (/^[A-Za-z]{3,25}$/.test(prenom)) {
            document.getElementById('firstNameErrorMsg').textContent = ""
            console.log("ok");
            return true;
        } else {
            document.getElementById('firstNameErrorMsg').textContent = "Veuillez vérifier le prénom"
            console.log("error");
            //alert("Veuillez vérifier le prénom saisi")
            return false
        }
    }

    //validation nom
    function checkNom() {
        const nom = contact.lastName;
        if (/^[A-Za-z]{3,25}$/.test(nom)) {
            document.getElementById('lastNameErrorMsg').textContent = ""
            console.log("ok");
            return true;
        } else {
            document.getElementById('lastNameErrorMsg').textContent = "Veuillez vérifier le nom saisi"
            console.log("error");
            return false
        }
    }

    //validation adresse
    /*function checkAdress() {
        const adresse = contact.Adresse;
        if (/^[a-zA-Z0-9\s,'-]$/.test(adresse)) {
            console.log("ok");
            return true;
        } else {
            console.log("error");
            alert("Veuillez vérifier l'adresse saisie")
            return false
        }
    }
    */

    //validation ville
    function checkVille() {
        const ville = contact.city;
        if (/^[A-Za-z]{3,25}$/.test(ville)) {
            document.getElementById('cityErrorMsg').textContent = ""
            console.log("ok");
            return true;
        } else {
            console.log("error");
            document.getElementById('cityErrorMsg').textContent = "Veuillez vérifier la ville saisie"
            return false
        }
    }

    //validation email
    function checkEmail() {
        const email = contact.email;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            document.getElementById('emailErrorMsg').textContent = ""
            console.log("ok");
            return true;
        } else {
            console.log("error");
            document.getElementById('emailErrorMsg').textContent = "Veuillez vérifier l'adresse e-mail saisie"
            return false
        }
    }

    if (checkPrenom() && checkNom() /*&& checkAdress()*/ && checkVille() && checkEmail()) {

        localStorage.setItem("contact", JSON.stringify(contact));


        fetch('http://localhost:3000/api/products/order', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contact,
                    products: idProducts
                })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                localStorage.setItem("orderId", data.orderId);
            })

        document.location.href = "confirmation.html";
    } else {}
    
})


 















