/*let params = new URL(document.location).searchParams;
let id = params.get('id');
console.log(id)



fetch('http://localhost:3000/api/products')
    .then(function (response) {
        return response.json()
    }).then(function(data){
        console.log(data)
        let card = document.getElementById("card");
            document.getElementById('title').innerHTML = data.name;
            document.getElementById('price').innerHTML = data.price;
            document.getElementById('description').innerHTML = data.description;
            document.querySelector('option').innerHTML = data.colors;
        
    })*/



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
        // option couleur
        //document.querySelector('option').innerHTML = itemData.colors[""];
        document.getElementById('imageUrl').src = itemData.imageUrl;
        document.querySelector('option').innerHTML = itemData.colors;
        document.getElementById('ref').value = itemData._id;
        document.getElementById('title').value = itemData.name;

        /*for (const couleur of data) {

            
          let option = document.createElement('option')
          option.classList.add('card')
          

          option.innerHTML =`
          <option>${itemData.colors}</option>
          `
          

        section.appendChild(a)
  
        }*/
      }
     //TEST LOCAL STORAGE

        /*localStorage.setItem("quantity","Suantity.value");

        let maQuantite = localStorage.getItem("quantity");
        console.log(maQuantite);*/

        const ajouterPanier = document.getElementById("addToCart");
        console.log(ajouterPanier)
        
       //bouttonAjouterPanier.addEventListener("click", () => {
      
        ajouterPanier.addEventListener("click", (event) => {
          event.preventDefault;
          localStorage.setItem("quantite",document.getElementById('quantity').value);
          localStorage.setItem("couleur",document.getElementById('colors').value);
          localStorage.setItem("id produit",document.getElementById('ref').value);
          localStorage.setItem("prix",document.getElementById('price').value);
          localStorage.setItem("nom",document.getElementById('title').value);

         
        
          
          /*let produitChoisi = {
            modele:  itemData.name,
            image: itemData.imageUrl,
            prix: itemData.prix,
            couleur: itemData.colors,
            quantite: itemData.quantity,
            id: itemData._id,
          }*/
        
          
          })
      


        
  
      