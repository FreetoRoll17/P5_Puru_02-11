

fetch('http://localhost:3000/api/products')
    .then(function (response) {
        return response.json()
    }).then(function(data){
        console.log(data)
        let card = document.getElementById("card");
        for (const key in data.reverse()) {
            let newCard = card.cloneNode(true);
            newCard.id = "card"+(parseInt(key) + 1);
            newCard.href = './product.html?id='+data[key]._id;
            newCard.querySelector('.productName').innerHTML = data[key].name;
            newCard.querySelector('.productDescription').innerHTML = data[key].description;
            newCard.querySelector('img').src = data[key].imageUrl;
            newCard.querySelector('img').alt = data[key].altTxt;
            
            card.parentNode.insertBefore(newCard, card.nextSibling);
            
            /*document.getElementById('productName_'+ (parseInt(key) + 1)).style.backgroundColor='red';
            document.getElementById('productName_'+ (parseInt(key) + 1)).innerHTML= data[key].name;
            document.getElementById('productName_'+ (parseInt(key) + 1)).innerHTML= data[key].name;
            document.getElementById('productDescription_'+ (parseInt(key) + 1)).innerHTML= data[key].description;*/
        }
        delete document.getElementById('card1') 
    })


   





/*

element.querySelector('.productName').innerHTML =










 document.getElementById("productName").innerHTML = data[0].name;
        document.getElementById("productDescription").innerText = data[0].description;
*/