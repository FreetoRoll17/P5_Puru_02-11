
const storageTitle = localStorage.getItem("nom");
console.log(storageTitle)


window.onload = function () {
document.getElementById("title").innerHTML = storageTitle;
}


/*
window.onload = function() {
    document.getElementById('videoBackground').onload = function() {
        document.body.style.backgroundColor = 'black';
    }
};
*/