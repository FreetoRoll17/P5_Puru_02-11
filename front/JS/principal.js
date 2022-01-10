fetch('http://localhost:3000/api/products')
    .then(function (response) {
        return response.json()
    }).then(function (data) {
        let section = document.getElementById('items')
        console.log(data)


        for (const kanap of data) {


            let a = document.createElement('a')
            a.classList.add('card')
            a.href = './product.html?id=' + kanap._id;
            //a.href = './htmlTEST.html?id='+kanap._id;

            a.innerHTML = `
                <article>
                  <img src="${kanap.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
                  <h3 class="productName" >${kanap.name}</h3>
                  <p class="productDescription" >${kanap.description}</p>
                </article>
                `


            section.appendChild(a)




        }


    })



















