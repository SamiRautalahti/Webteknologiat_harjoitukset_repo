$("#btn").click(function () {
    let username = $("#username").val();
    let githubUrl = "https://api.github.com/users/" + username;


    $.ajax({
        url: githubUrl,
        type: "GET",
        dataType: "json",
        success: function (response) {
            // show data in DIV
            $("#account-data").append("<br>" + "<i>" + response.name + "</i>");
            $("#account-data").append("<br>" + "<i>" + response.company + "</i>");
            $("#account-data").append("<br>" + "<i>" + response.login + "</i>");
            $("#account-data").append("<br>" + "<i>" + response.created_at + "</i>");
            $("#account-data").append("<br>" + "<i>" + response.updated_at + "</i>");

        },
        error: function (jqxhr, textStatus, error) {
            console.log("Error: " + textStatus);
            $("#account-data").append("<br>" + "<i>" + "Ei löydy" + "</i>");
        },
    });
});