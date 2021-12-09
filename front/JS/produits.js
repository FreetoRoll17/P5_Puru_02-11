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
        
        //document.querySelector('option').innerHTML = itemData.colors[""];
        document.getElementById('imageUrl').src = itemData.imageUrl;
        document.getElementById('imageUrl').value = itemData.imageUrl;
        document.getElementById('optionColor').innerHTML = itemData.colors[1];
        document.getElementById('ref').value = itemData._id;
        document.getElementById('title').value = itemData.name;



        //let select = document.getElementById("colors");
        //console.log(select);


        //console.log(itemData.colors);
        /*  let newOption= optionColor.cloneNode(true);
            newOption.id = "optionColor"+(parseInt(key) + 1);
            newOption.getElementById('optionColor').innerHTML = data[key].name;
            
            optionColor.parentNode.insertBefore(newOption, optionColor.nextSibling); 
            section.appendChild(newOption)
        */  



       /* 
        for (let color of itemData) {

          let select = document.getElementById("colors");
          let opt = document.createElement("option");
          option.value = (document.querySelector('option').innerHTML = itemData.colors);
          option.text = "option.value"; // Ca peut très bien être tout simplement taValue aussi

          select.add(option);
        }
*/
        
          
        
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

        const ajouterPanier = document.getElementById("addToCart");
        //console.log(ajouterPanier)
        
      
        ajouterPanier.addEventListener("click", (event) => {
          event.preventDefault;

          

          var produitChoisi = {
            modele:  title,
            image: imageUrl,
            prix: price, //= price,
            couleur: colors,
            //quantite: localStorage.setItem("quantite",document.getElementById('quantity').value),
            id: ref,
          }

          var produitChoisi = JSON.stringify(produitChoisi)

          var produitAjoute = "produitAjouté_";
          var produitAjouteId = localStorage.length+1;
          localStorage[produitAjoute + produitAjouteId] = produitChoisi;
          
          return false;
          
          

          

          

          /*document.getElementById('bt_submit').addEventListener('touchstart', function(){
 
          var pretDATA = {
              nom:document.getElementById('input_nom').value,
              objet:document.getElementById('input_objet').value,
              date:new Date()
          };
          var pretDATA = JSON.stringify(pretDATA);
          
          var pret = "pret";
          var pretID = localStorage.length+1;
          localStorage[pret + pretID] = pretDATA;
          
          return false;
          });
          */ 

        /*
          localStorage.setItem("quantite",document.getElementById('quantity').value);
          localStorage.setItem("couleur",document.getElementById('colors').value);
          localStorage.setItem("id produit",document.getElementById('ref').value);
          localStorage.setItem("prix",document.getElementById('price').value);
          localStorage.setItem("nom",document.getElementById('title').value);
          localStorage.setItem("image",document.getElementById('imageUrl').value);
          */
         
        
          
          
        
          
          })
      


        
  
      