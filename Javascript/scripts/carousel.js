window.onload = function () {
    document.body.setAttribute("style", "background-image: url('images/taustakuva.jpg')")
}

let story_array = [
    { "title": "Eka koira", "content": "Aapeli", "src": "images/dog1.jpg" },
    { "title": "Toka koira", "content": "Reino", "src": "images/dog2.jpg" },
    { "title": "Kolmas koira", "content": "Köpi", "src": "images/dog3.jpg" },
    { "title": "Neljäs koira", "content": "Hannu", "src": "images/dog4.jpg" },
    { "title": "Viides koira", "content": "Rekku", "src": "images/dog5.jpg" },
    { "title": "Kuudes koira", "content": "Biffi", "src": "images/dog6.jpg" },
    { "title": "Seitsemäs koira", "content": "Ressu", "src": "images/dog7.jpg" },
    { "title": "Kahdeksas koira", "content": "Joe Cool", "src": "images/dog8.jpg" },
];

let index;
let myTimer;
const indexKey = 'myDogs';

$(function () {
    if (localStorage.hasOwnProperty(indexKey)) {
        index = localStorage.getItem(indexKey);
        console.log('index is: ' + index);
    }
    else {
        index = 0;
    }

    myTimer = 0;
    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});

$('#left').click(function () {
    index = parseInt(index) - 1;
    localStorage.setItem(indexKey, index);
    if (index < 0) {
        index = story_array.length - 1;
    }
    $('#kuva').hide();
    $('text-title').hide();

    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);

    $('#kuva').fadeOut("slow");
    $('#kuva').fadeIn("slow");

    $('#text-title').fadeOut("slow");
    $('#text-title').fadeIn("slow");
});

$('#right').click(function () {
    index = parseInt(index) + 1;
    console.log(index + ' ' + story_array.length);
    if (index == story_array.length) {
        index = 0;
    }
    localStorage.setItem(indexKey, index);
    console.log(index);
    $('#kuva').hide();
    $('text-title').hide();

    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);

    $('#kuva').fadeOut("slow");
    $('#kuva').fadeIn("slow");

    $('#text-title').fadeOut("slow");
    $('#text-title').fadeIn("slow");
});

$('#start').click(function () {
    localStorage.setItem(indexKey, index);
    if (myTimer == 0) { //2000: korjaa ehto
        //karuselli ei pyöri
        myTimer = window.setInterval('$("#right").click()', 2000);
        console.log(myTimer);
        $('#start').html('<i class="bi-pause"></i>');
    }
    else {
        //pysäytä karuselli
        window.clearInterval(myTimer);
        myTimer = 0;
        $('#start').html('<i class="bi bi-file-play"></i>');
    }
});