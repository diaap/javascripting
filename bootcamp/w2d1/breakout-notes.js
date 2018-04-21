Data event vs end event

they are events on a stream

stream is flow of data

chuncks come as data events

Node.js is event driven

.on is basic construct of Node.js

.end :  ex downloading a pic, chuncks would be slices of pic, .end is when the pic is done downloading

diff between https.get and module request is none, both request

HTTP Status codes: let us know the status of the response received
         ex: (level) 200 = successful // all
         ex: (level) 400 = client-side error // we know the client side has a mistake
         ex: (level) 500 = server-side error (YOUR MISTAKE) //

Making a request: to use some kind of client to send an http request - get req, etc, to a server and how you tell the client where to go using a URL

in what format have we gotten responses? html, JSON, rich format, RTF, plain text
you get things in plain text, you convert to objects using JSON

what does the term API stand for?
Application Programming Interface
some kind of application you create - like instagram, twitter, openData...
programming interface - a collection of headpoints that clients can interface with or use

what does this API do, how do I authenticate it? you as the user of this API how do you authenticate
how do you authenticate? provide mechanism, access token, then look at which endpoints it provides

instagram? logical resources: users, comments

demo --

first thing I do:
install request - //save to save it locally into your package
npm install request --save

then in index --
var request = require('request');
request.get('https:')
function (err, response, body) {
  if (err) {
    console.log(err);
  }

  console.log(response);

}
what does it mean to say parametize this logic?


var request = require('request');
var person = {
  firstName: "John",
  lastName: "Doe"
}

console.log('hello' + person.firstName);
console.log(`Hello ${person.firstName} ${person.lastName}`);



whats the diff between response and body?

response is the full http response bubbling up from transportation - most raw response you get
//there's a body object in this response


var request = require('request');

function getHolidays(country, year, parser) {
    var url = `https://holidayapi.com/v1/holidays?country=${country}&year=${year}&key=${process.env.HOLIDAY_API}`;
    request(url, function (error, response, body) {
        console.log('statusCode:', response && response.statusCode);
        if (error) {
            console.log('error:', error);
        } else {
            console.log('body:', body);
            if (parser) {
                parser(body);
            }
        }
    });
}

module.exports = {
    getHolidays: getHolidays
};

console.log(process.env)












curl is an http client -- can handle http requests for ex:

curl -v : for debugging
http is a language, a method is a verb
get: give me a coffee, in exchange you give them money - post
starbucks is server I am the client

JSON to send your code