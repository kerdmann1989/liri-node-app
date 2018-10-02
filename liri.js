
require("dotenv").config();

var keys = require("./keys")
var spotifyAPI = require("./keys")
var fs = require("fs");
var request = require("request");
var input = process.argv;
var phrase = input[2];
var movieName = "";

for (var i = 3; i < input.length; i++){
  if (i > 3 && i < input.length) {
    movieName = movieName + "+" + input[i];
    console.log("My Movie" + movieName);
  } else {
    movieName += input[i];
  }
}

function movie() {
    if (movieName == null) {
    movieName = "Mr. Nobody";
} 

request("http://www.omdbapi.com/?t="+movieName+"&y=&plot=short&tomatoes=True&apikey=trilogy", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    console.log("------------------------");
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Lead Actors: " + JSON.parse(body).Actors);
    console.log("------------------------");
}
});
}

switch (phrase) {
case "spotify-this-song":
  spotify();
  break;

case "movie-this":
  movie();
  break;

case "concert-this":
  concert();
  break;

case "do-what-it-says":
  doWhatItSays();
  break;
}
