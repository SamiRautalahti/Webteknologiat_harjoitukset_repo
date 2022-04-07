var helloElement = document.getElementById('hello-div');

windows.onload = function () {
    console.log("Tämä kirjoitetaan selaimen konsoliin");
}

function sayHelloTo(name) {
    console.log('buttonia on painettu, nimi on: ' + name);
    //alert("Hei " + name + "!");
    helloElement.innerHTML = 'hei' + name;
}

function hideText() {
    helloElement.innerHTML = '';
}