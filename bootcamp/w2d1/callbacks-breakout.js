var text = "lorem ipsum dolor, sit amet";

//instead of creating three functions like. this, I'm going to use a callback
var txt = "lorem ipsum dolor, sit amet";

function doSomething(txt, callback) { //you can call it cb

//   var callback = function replaceV(txt) {
//   txt = txt.replace(/m/gi, 'v');
//   console.log(txt);
// }
//   console.log(callback);

  callback(txt);
}

function makeLowerCase(txt) {
  txt = txt.toLowerCase();
  console.log(txt);
}

function makeUpperCase(txt) {
  txt = txt.toUpperCase();
  console.log(txt);
}

function replaceV(txt) {
  txt = txt.replace(/m/gi, 'v');
  console.log(txt);
}

function saveResult(txt) {
  //save the text to a file

}

// makeLowerCase(text);
// makeUpperCase(text);
// replaceV(text);

doSomething(text, saveResult);

you could always pass it a function in the parameter if you don't reuse it
