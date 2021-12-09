const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get("id")

fetch(`http://localhost:3000/api/products/${id}`)
    .then((response) => response.json)
    .then((res) => transfInfo(res))
    console.log(id)
   
    

    function transfInfo(kanap) {
        const name = kanap.name
        const price = kanap.price

        transfTitre(name)
    }

    function transfTitre(name) {
        
        const h1 = document.getElementById("title")
        if (h1 != null) h1.innerHTML = name
    }

    












/*
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
        document.getElementById('optionColor').innerHTML = itemData.colors[0];
        document.getElementById('ref').value = itemData._id;
        document.getElementById('title').value = itemData.name;

      }



const ajouterPanier = document.getElementById("addToCart");
ajouterPanier.addEventListener("click", (event) => {
    event.preventDefault();
    /*
    $ : quantity = document.getElementById(quantity);
    
    let objectProduct = new product (
        newId,
        product.name,
        product.description,
        product.price,
        list.value,
        quantity.value,
        product.imageUrl
    )

    // vérifie s'il est déja présent
            // si oui, dejaPresent en true et sauvegarde sa place dans le localStorage
            let isAlreadyPresent = false;
            let indexModification;
            for (products of basket) {
                switch (products.option) {
                    case objectProduct.option:
                        isAlreadyPresent = true;
                        indexModification = basket.indexOf(products);
                }
            }

            // si déjaPresent incrémente seulement la quantité
            if (isAlreadyPresent) {
                basket[indexModification].quantity =
                    +basket[indexModification].quantity + +objectProduct.quantity;
                localStorage.setItem("cameras", JSON.stringify(basket));
                // si non, ajoute le produit au localStorage
            } else {
                basket.push(objectProduct);
                localStorage.setItem("cameras", JSON.stringify(basket));
            }



    */ 


/*
    localStorage.setItem("quantite",document.getElementById('quantity').value);
    localStorage.setItem("couleur",document.getElementById('colors').value);
    localStorage.setItem("id produit",document.getElementById('ref').value);
    localStorage.setItem("prix",document.getElementById('price').value);
    localStorage.setItem("nom",document.getElementById('title').value);
    localStorage.setItem("image",document.getElementById('imageUrl').value);
    

    
})


    let quantite = localStorage.setItem("quantite",document.getElementById('quantity').value);
    let couleur = localStorage.setItem("couleur",document.getElementById('colors').value);
    let idProduit =  localStorage.setItem("id produit",document.getElementById('ref').value);
    let prix =  localStorage.setItem("prix",document.getElementById('price').value);
    let nom = localStorage.setItem("nom",document.getElementById('title').value);
    let urlIlage = localStorage.setItem("image",document.getElementById('imageUrl').value);    

let produitChoisi = {
    nom,
    quantite,
    prix,
    idProduit,
}
console.log(produitChoisi) */