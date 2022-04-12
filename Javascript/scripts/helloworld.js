var helloElement;

window.onload = function () {
    console.log("Tämä kirjoitetaan selaimen konsoliin");
    helloElement = document.getElementById('hello-div');
    document.body.setAttribute("style", "background-image: url('images/taustakuv.jpg')")
}

function sayHelloTo(name) {
    console.log('buttonia on painettu, nimi on: ' + name);
    //alert("Hei " + name + "!");
    document.getElementById('hello-div').innerHTML = 'Hei ' + name;
    console.log('HelloWorld!');
}

function hideText() {
    document.getElementById('hello-div').innerHTML = '';
}