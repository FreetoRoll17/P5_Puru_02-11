

fetch('http://localhost:3000/api/products')
    .then(function (response) {
        return response.json()
    }).then(function(data){
        let section = document.getElementById('items')
        console.log(data)
        

        for (const kanap of data) {

            
                let a = document.createElement('a')
                a.classList.add('card')
                a.href = './product.html?id='+kanap._id;

                a.innerHTML = `
                <article>
                  <img src="${kanap.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
                  <h3 class="productName" >${kanap.name}</h3>
                  <p class="productDescription" >${kanap.description}</p>
                </article>
                `
                

              section.appendChild(a)
        
            
        /*  let newCard = card.cloneNode(true);
            newCard.id = "card"+(parseInt(key) + 1);
            newCard.href = './product.html?id='+data[key]._id;
            newCard.querySelector('.productName').innerHTML = data[key].name;
            newCard.querySelector('.productDescription').innerHTML = data[key].description;
            newCard.querySelector('img').src = data[key].imageUrl;
            newCard.querySelector('img').alt = data[key].altTxt;
            
            //card.parentNode.insertBefore(newCard, card.nextSibling); 
            section.appendChild(newCard)
        */   
            
        }

        
    })


   







   


   





/*

element.querySelector('.productName').innerHTML =










        document.getElementById("productName").innerHTML = data[0].name;
        document.getElementById("productDescription").innerText = data[0].description;
*/