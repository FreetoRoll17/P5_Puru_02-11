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
        
    })