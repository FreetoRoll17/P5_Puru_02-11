function order(){
    const orderId = document.getElementById("orderId");
    orderId.innerText = localStorage.getItem("orderId");
    localStorage.clear();
    
}

order();