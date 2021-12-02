
var nomProduit = localStorage.getItem("nom");
console.log(nomProduit)
var prixProduit = localStorage.getItem("prix");
var couleurProduit = localStorage.getItem("couleur");
var imageProduit = localStorage.getItem("image");
var quantiteProduit = localStorage.getItem("quantite");
console.log(quantiteProduit);



document.getElementById("nom").innerHTML = nomProduit;
document.getElementById("prix").innerHTML = prixProduit+"€";
document.getElementById("couleur").innerHTML = couleurProduit;
document.getElementById("imageProduit").src = imageProduit;
document.getElementById("itemQuantity").value = quantiteProduit;

/*
window.onload = function () {
document.getElementById("title").innerHTML = storageTitle;
}
*/


/*
window.onload = function() {
    document.getElementById('videoBackground').onload = function() {
        document.body.style.backgroundColor = 'black';
    }
};
*/