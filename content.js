//var image = document.createElement("INPUT");
//x.setAttribute("type", "image");

// function getName() {
//     return localStorage.getItem("userName");
//   }

//   function updateHTML() {
//     var name = getName();
//     document.getElementById("storedName").innerHTML = name;
//   }

//   function myFunction() {
//     // Gets input value
//     var name = document.getElementById("name").value;

//     // Saves data to retrieve later
//     localStorage.setItem("userName", name);

//     // Updates HTML
//     updateHTML();
//   }
$(document).ready(function () {
    $("#nameSave").on("click", function () {
        var inputName = $("#Name").val();
        localStorage.setItem("userName", inputName);
        $("#Name").val("");
        $("#Name").hide();
        $("#nameSave").hide();
    });
});