//line from hw instructions**
//my code^

//read and set any environment variables with the dotenv package**
require("dotenv").config();

//require fs to write to files^
var fs = require("fs");
//require axios^
var axios = require("axios");
//require moment^
var moment = require("moment");




// import keys.js and store as variable**
var keys = require("./keys.js");
// able to access keys like so:**
var spotify = new Spotify(keys.spotify);



// Make it so liri.js can take in one of the following commands:



// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

// What Each Command Should Do


// node liri.js concert-this <artist/band name here>
