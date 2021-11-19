/*let params = new URL(document.location).searchParams;
let id = params.get('id');
console.log(id)


fetch('http://localhost:3000/api/products/'+('${_id}'))

    .then(function (response) {
        return response.json()
    }).then(function(data){
        console.log(data)
        document.querySelector('.description').innerHTML = data.description;

    })



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
        return new URL(location.href).searchParams.get('id')
      }
      

      
      function getItemData(itemId) {
        return fetch("http://localhost:3000/api/products/" + itemId)
          .then(function(httpBodyResponse) {
            return httpBodyResponse.json()
          })
          .then(function(article) {
            return article
          })
          .catch(function(error) {
            alert(error)
          })
      }
      
      function displayItem(itemData) {
        document.getElementById("title").textContent = itemData.name
        document.getElementById("description").textContent = itemData.description;
        document.getElementById('price').innerText = itemData.price;
        document.querySelector('option').innerHTML = itemData.colors;
        document.getElementById('imageUrl').src = itemData.imageUrl;
        

      }