
require("dotenv").config();

var keys = require("./keys")
var spotifyAPI = require("./keys")

var request = require("request");
var phrase = process.argv[2];
var title = process.argv[3];

// var nodeArgs = process.argv;
// var input = process.argv

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
function movie() {
if (title == null) {
    
title = "Mr. Nobody";

}


request("http://www.omdbapi.com/?t="+title+"&y=&plot=short&apikey=trilogy", function(error, response, body) {
  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("------------------------");
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Lead Actors: " + JSON.parse(body).Actors);
    console.log("------------------------");
}
});
}




// var fs = require("fs");

// // Take two arguments.
// // The first will be the action (i.e. "deposit", "withdraw", etc.)
// // The second will be the amount that will be added, withdrawn, etc.
// var phrase = process.argv[2];
// var item = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
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

// function spotify() {

//   // We will read the existing bank file
//   fs.readFile("bank.txt", "utf8", function(err, data) {
//     if (err) {
//       return console.log(err);
//     }

//     // Break down all the numbers inside
//     data = data.split(", ");
//     var result = 0;

//     // Loop through those numbers and add them together to get a sum.
//     for (var i = 0; i < data.length; i++) {
//       if (parseFloat(data[i])) {
//         result += parseFloat(data[i]);
//       }
//     }

//     // We will then print the final balance rounded to two decimal places.
//     console.log("You have a total of " + result.toFixed(2));
//   });
// }

// // If the "Deposit" function is called...
// function concert() {

//   // We will add the value to the bank file.
//   fs.appendFile("bank.txt", ", " + value, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // We will then print the value that was added (but we wont print the total).
//   console.log("Deposited " + value + ".");
// }

// // If the "Withdraw" function is called



// // If the "Lotto" function is called
// function doWhatItSays() {

//   // We will subtract 25 cents
//   fs.appendFile("bank.txt", ", -.25", function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // Then grab a random number
//   var chance = Math.floor((Math.random() * 10) + 1);

//   // If the random number equals 1...
//   if (chance === 1) {

//     // We will then add $2 to the account.
//     fs.appendFile("bank.txt", ", 2", function(err) {
//       if (err) {
//         return console.log(err);
//       }
//     });

//     // And tell the user the amount was added.
//     console.log("Congrats you won the lottery!");

//   // Otherwise we will tell them they lost 25 cents.
//   }
//   else {
//     console.log("Sorry. You just lost 25 cents. Maybe you should get a job instead.");
//   }
// }



// var spotify = new Spotify(keys.spotify);

// if (process.argv[2] === "spotify-this-song"){

// } if (process.argv[2] === "movie-this"

// } if (process.argv[2] === "do-what-it-says" 