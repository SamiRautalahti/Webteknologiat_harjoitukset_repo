let story_array = [
    { "title": "Aaaaaa", "content": "Aaaa aaaaaa aaaaa, aaa aaa a aa a." },
    { "title": "Bbbbbb", "content": "Bbbb bbbbbb bbbbb, bbb bbb b bb b." },
    { "title": "Cccccc", "content": "Cccc cccccc ccccc, ccc ccc c cc c." },
    { "title": "Dddddd", "content": "Dddd dddddd ddddd, ddd ddd d dd d." },
    { "title": "Eeeeee", "content": "Eeee eeeeee eeeee, eee eee e ee e." },
    { "title": "Ffffff", "content": "Ffff ffffff fffff, fff fff f ff f." },
];

let index;

$(function () {
    index = 0;
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});

$('#left').click(function () {
    index = index - 1;
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});
$('#start').click(function () {
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});
$('#right').click(function () {
    index = index + 1;
    $('#text-title').text(story_array[index].title);
    $('#text-content').text(story_array[index].content);
});




