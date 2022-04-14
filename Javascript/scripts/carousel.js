let story_array = [
    { "title": "Aaaaa", "content": "Aaaa aaaaaa aaaaa, aaa aaa a aa a.", "src": "images/dog1.jpg" },
    { "title": "Bbbbb", "content": "Bbbb bbbbbb bbbbb, bbb bbb b bb b.", "src": "images/dog2.jpg" },
    { "title": "Ccccc", "content": "Cccc cccccc ccccc, ccc ccc c cc c.", "src": "images/dog3.jpg" },
    { "title": "Ddddd", "content": "Dddd dddddd ddddd, ddd ddd d dd d.", "src": "images/dog4.jpg" },
    { "title": "Eeeee", "content": "Eeee eeeeee eeeee, eee eee e ee e.", "src": "images/dog5.jpg" },
    { "title": "Fffff", "content": "Ffff ffffff fffff, fff fff f ff f.", "src": "images/dog6.jpg" },
    { "title": "Ggggg", "content": "Ffff ffffff fffff, fff fff f ff f.", "src": "images/dog7.jpg" },
    { "title": "Hhhhh", "content": "Ffff ffffff fffff, fff fff f ff f.", "src": "images/dog8.jpg" },
];

let index;

$(function () {
    index = 0;
    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});

$('#left').click(function () {
    index = index - 1;

    if (index < 0) {
        index = story_array.length - 1;
    }
    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});

$('#start').click(function () {
    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});

$('#right').click(function () {
    index = index + 1;

    if (index > story_array.length) {
        index = 0;
    }
    $('#kuva').attr('src', story_array[index].src);
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});

$('#start').click(function () {
    var timer = window.setInterval('$("#right").click()', 5000);
})



