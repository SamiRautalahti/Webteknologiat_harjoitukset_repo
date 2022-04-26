window.onload = function () {
    document.body.setAttribute("style", "background-image: url('images/taustakuva.jpg')")
}

var counter = 0;

$("#gif").hide();

$("#btn").click(function () {
    let urlNorrisJokes = "https://api.icndb.com/jokes/random";
    $("#gif").show();

    setTimeout(() => {
        $.ajax({
            url: urlNorrisJokes,
            type: "GET",
            dataType: "json",
            success: function (response) {
                // show data in DIV

                $("#accordion").append("<br>" + "<i>" + response.value.id + "</i>");
                $("#accordion").append("<br>" + "<i>" + response.value.joke + "</i>");
                $("#gif").hide();
                counter++;
                $("#laskuri").text(counter);
            },
            error: function (jqxhr, textStatus, error) {
                console.log("Error: " + textStatus);
                $("#accordion").append("<br>" + "<i>" + "Ei löydy" + "</i>");
            },
        });
    }, "2000");


});