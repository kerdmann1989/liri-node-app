
require("dotenv").config();

var keys = require("./keys")
// var spotifyAPI = require("./keys")
var fs = require("fs");
var request = require("request");
var input = process.argv;
var phrase = input[2];
var selection = "";
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment');

for (var i = 3; i < input.length; i++){
  if (i > 3 && i < input.length) {
    selection = selection + "+" + input[i];
  } else {
    selection += input[i];
  }
}



function movie() {
    if (selection === "") {
    selection = "Mr. Nobody";
} 

request("http://www.omdbapi.com/?t="+selection+"&y=&plot=short&tomatoes=True&apikey=trilogy", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    console.log("\n\r");
    console.log("==================================== OMDB MOVIE DATA ===================================="  + "\n" );
    console.log("Movie Title: " + JSON.parse(body).Title + "\n");
    console.log("Release Year: " + JSON.parse(body).Year + "\n");
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating + "\n");
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n");
    console.log("Country: " + JSON.parse(body).Country + "\n");
    console.log("Language: " + JSON.parse(body).Language + "\n");
    console.log("Plot: " + JSON.parse(body).Plot + "\n");
    console.log("Lead Actors: " + JSON.parse(body).Actors + "\n");
    console.log("========================================================================================"  + "\n" );}
});
}

function spotifyThis() {
  if (selection === "") {
    selection = "The Sign";
  } 

  spotify.search ({type: 'track', query: selection}, function(err, data) {
    

    if (err) {
     console.log('Error occurred: ' + err);
     return;

    } else {

      console.log("============================== SPOTIFY ==============================" + "\n")
      console.log("Artist: " + data.tracks.items[0].album.artists[0].name + "\n");
      console.log("Song Title: " + data.tracks.items[0].name + "\n");
      console.log("Song Preview: " + data.tracks.items[0].artists[0].external_urls.spotify  + "\n");
      console.log("Album Name: " + data.tracks.items[0].album.name  + "\n");
      console.log("=====================================================================" + "\n")
    }
  });
} 

function concert() {
  if (selection === "") {
    console.log("\n\r");
    console.log("============================================="  + "\n" );
    console.log("WE COULD NOT FIND ANY INFORMATION. TRY AGAIN" + "\n");
    console.log("============================================="  + "\n" );
    console.log("\n\r");
} 

request("https://rest.bandsintown.com/artists/" + selection + "/events?app_id=codingbootcamp", function(error, response, body) {
// If the request is successful (i.e. if the response status code is 200)
if (!error && response.statusCode === 200) {

  jsonBody = JSON.parse(body);
  var eventDate = jsonBody[0].datetime;
  eventDate = moment().format("MM/DD/YYYY");

  console.log("\n\r");
  console.log("==================================== BANDS IN TOWN ===================================="  + "\n" );
  console.log("Lineup: " + jsonBody[0].lineup);
  console.log("Venue: " + jsonBody[0].venue.name);
  console.log("Location: " + jsonBody[0].venue.city + ", " + jsonBody[0].venue.city)
  console.log("Event Date: " + eventDate);
  console.log("\n\r");
  console.log("========================================================================================"  + "\n" );
}
});
}

switch (phrase) {
case "spotify-this-song":
  spotifyThis();
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
