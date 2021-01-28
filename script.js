// function by suri
$("#nameSave").on("click", function () {
  var inputName = $("#Name").val();
  localStorage.setItem("userName", inputName);
  $("#Name").val("");
  $("#Name").hide();
  $("#nameSave").hide();

  var Ben = "";
  $("#name").val(Ben);
  var suri = "Hello " + localStorage.getItem("userName") + ", Welcome!";
  $("#greeting").text(suri);
});

//playTrailer function by Ben Trevethan
function playTrailer(userInput) {
  var queryURL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=" +
    userInput +
    "%trailer" +
    "&type=video&key=AIzaSyCBJssvPtEHpo_rzFR6B8w_cLaTuOQEL64";
  $.ajax({
    url: queryURL,
  }).then(function (response) {
    var videoID = response.items[0].id.videoId;
    $("#player").empty();
    $("#player").append("<iframe>");
    $("iframe").attr(
      "src",
      `https://www.youtube.com/embed/${videoID}?autoplay=1`,
    );
    $("iframe").attr("allowfullscreen", "allowfullscreen");
    $("iframe").attr("mozallowfullscreen", "mozallowfullscreen");
    $("iframe").attr("msallowfullscreen", "msallowfullscreen");
    $("iframe").attr("oallowfullscreen", "oallowfullscreen");
    $("iframe").attr("webkitallowfullscreen", "webkitallowfullscreen");
    // $("iframe").attr("width", '640')
    // $("iframe").attr("height", '390')
    $("iframe").attr("id", "iframeResponsive");
  });
}
//end playTrailer function by Ben Trevethan

//queryOMDB function by Benjamin Lee
function queryOMDB(title) {
  var baseUrl = "https://www.omdbapi.com/?apikey=";
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
$("#search-button").on("click", function (t) {
  var userInput = $("#search-input").val();
  t.preventDefault();
  playTrailer(userInput);
  queryOMDB(userInput);
});

//end onClick function
$(function () {
  var availableTags = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "Pulp Fiction",
    "The Good  the Bad and the Ugly ",
    "The Dark Knight ",
    "12 Angry Men ",
    "Schindler 's List",
    "The Lord of the Rings: The Return of the King ",
    "Fight Club ",
    "Star Wars: Episode V - The Empire Strikes Back ",
    "The Lord of the Rings: The Fellowship of the Ring ",
    "One Flew Over the Cuckoo 's Nest",
    "Inception",
    "Goodfellas",
    "Star Wars",
    "Seven Samurai",
    "Forrest Gump ",
    "The Matrix ",
    "The Lord of the Rings: The Two Towers ",
    "City of God ",
    "Se7en ",
    "The Silence of the Lambs ",
    "Once Upon a Time in the West",
    "Casablanca",
    "The Usual Suspects",
    "Raiders of the Lost Ark",
    "Rear Window",
    "It's a Wonderful Life ",
    "Psycho ",
    "Léon: The Professional ",
    "Sunset Blvd.",
    " American History X ",
    "Apocalypse Now ",
    "Terminator 2: Judgment Day",
    "Saving Private Ryan",
    "Memento",
    "City Lights",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb ",
    "Alien ",
    "Modern Times ",
    "Spirited Away ",
    "North by Northwest ",
    "Back to the Future ",
    "Life Is Beautiful ",
    "The Shining ",
    "The Pianist ",
    "Citizen Kane ",
    "The Departed ",
    "M ",
    "Paths of Glory ",
    "Vertigo",
    "Django Unchained",
    "Double Indemnity",
    "The Dark Knight Rises",
    "Aliens",
    "Taxi Driver",
    "American Beauty ",
    "The Green Mile ",
    "Gladiator ",
    "The Intouchables ",
    "WALL· E ",
    "The Lives of Others ",
    "Toy Story 3 ",
    "The Great Dictator ",
    "The Prestige ",
    "A Clockwork Orange ",
    "Lawrence of Arabia ",
    "Amélie ",
    "To Kill a Mockingbird ",
    "Reservoir Dogs",
    "Das Boot",
    "The Lion King",
    "Cinema Paradiso",
    "Star Wars: Episode VI - Return of the Jedi",
    "The Treasure of the Sierra Madre ",
    "The Third Man ",
    "Once Upon a Time in America ",
    "Requiem for a Dream ",
    "Eternal Sunshine of the Spotless Mind ",
    "Full Metal Jacket ",
    "Oldboy",
    "Braveheart ",
    "L.A.Confidential ",
    "Bicycle Thieves ",
    "Chinatown",
    "Singin' in the Rain",
    "Princess Mononoke",
    "Monty Python and the Holy Grail",
    "Metropolis",
    "Rashomon",
    "Some Like It Hot",
    "Amadeus",
    "2001: A Space Odyssey",
    "All About Eve",
    "Witness for the Prosecution",
    "The Sting",
    "The Apartment",
    "Grave of the Fireflies",
    "Indiana Jones and the Last Crusade",
  ];

  $("#search-input").autocomplete({
    source: availableTags,
    minLength: 6,
  });
});
