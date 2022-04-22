window.onload = function () {
    document.body.setAttribute("style", "background-image: url('images/taustakuva.jpg')")
}


var element = "";

function naytaGrid() {
    element = document.getElementById("image-container");
    element.classList.remove("flex-container");
    element.classList.add("grid-container");
}

function naytaFlex() {
    element = document.getElementById("image-container");
    element.classList.remove("grid-container");
    element.classList.add("flex-container");

}
