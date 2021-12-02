const queryString_url_id = window.location.search;

const urlSearchParams = new URLSearchParams (queryString_url_id);
console.log(urlSearchParams);


const leId = urlSearchParams.get("id");
console.log(leId);


//fetch 

let response = await fetch(`http://localhost:3000/api/products/${id}`);