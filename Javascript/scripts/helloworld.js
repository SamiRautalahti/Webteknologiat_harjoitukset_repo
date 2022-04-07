var helloElement;

window.onload = function () {
    console.log("Tämä kirjoitetaan selaimen konsoliin");
    helloElement = document.getElementById('hello-div');
}

function sayHelloTo(name) {
    console.log('buttonia on painettu, nimi on: ' + name);
    //alert("Hei " + name + "!");
    document.getElementById('hello-div').innerHTML = 'Hei ' + name;
}

function hideText() {
    document.getElementById('hello-div').innerHTML = '';
}