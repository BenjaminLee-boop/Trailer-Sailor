//playTrailer function by Ben Trevethan
function playTrailer(userInput){
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" + userInput + "%trailer" + "&type=video&key=AIzaSyCBJssvPtEHpo_rzFR6B8w_cLaTuOQEL64"
      $.ajax({
      url: queryURL,
      }).then(function(response) {
          var videoID = response.items[0].id.videoId;
          $("#player").append("<iframe>")
            $("iframe").attr("src", `https://www.youtube.com/embed/${videoID}?autoplay=1`)
            $("iframe").attr("width", '640')
            $("iframe").attr("height", '390') 
      });
}
//end playTrailer function by Ben Trevethan

//queryOMDB function by Benjamin Lee
function queryOMDB(title) {
    var baseUrl = "http://www.omdbapi.com/?apikey=";
    var OMDB_API_KEY = "trilogy";
    var searchQuery = "&t=";
    $.ajax(baseUrl + OMDB_API_KEY + searchQuery + title).then(function (r) {
      $("#movieTitle").text(r.Title);
      $("#movieReleaseDate").text(r.Year);
      $("#moviePlot").text(r.Plot);
      $("#IMDB").text(r.Ratings[0].Value);
      $("#rottenTomatoes").text(r.Ratings[1].Value);
      $("#metaCritic").text(r.Ratings[2].Value);
      $("#moviePoster").attr("src", r.Poster);
    });
  }
  //end queryOMDB function by Benjamin Lee

//onClick to call the two functions
$("#ajax-test").on("click", function(t){
    var userInput = $("#user-input").val();
    t.preventDefault();
    playTrailer(userInput);
    queryOMDB(userInput);
});
playTrailer("The Matrix");
queryOMDB("The matrix");
//end onClick function
