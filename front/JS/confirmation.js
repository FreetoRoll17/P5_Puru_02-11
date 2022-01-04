function order(){
    const idorder = document.getElementById("orderId");
    idorder.innerText = localStorage.getItem("orderId");
    console.log(localStorage.getItem("orderId"))
    
}

order();