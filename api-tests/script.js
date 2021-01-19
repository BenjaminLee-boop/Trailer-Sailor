function queryOMDB(title) {
  var baseUrl = "http://www.omdbapi.com/?apikey=";
  var OMDB_API_KEY = "trilogy";
  var searchQuery = "&t=";

  $.ajax(baseUrl + OMDB_API_KEY + searchQuery + title).then(function (r) {
    var movieContainer = `
    <h1>${r.Title}</h1>
    <h3>${r.Year}</h3>
    <h3>${r.Plot}</h3>
    <img src="${r.Poster}"/>
    `;

    $("#movieContainer").append(movieContainer);
    console.log(r);
  });
}

$("#searchBtn").click(function (e) {
  $("#movieContainer").empty();
  e.preventDefault();
  var movieTitle = $("#test").val();
  queryOMDB(movieTitle);
});
