function kartanPaivitys() {
    let address = document.getElementById('katuosoite').value
    let city = document.getElementById('kaupunki').value
    let location = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    
document.getElementById("googleKartta").src = location;
}