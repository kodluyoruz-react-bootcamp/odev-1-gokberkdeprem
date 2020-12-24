"use strict";var _types = require('sucrase/dist/parser/tokenizer/types');
var _service = require('./lib/service'); //import getData function to use in this file

let newData = _service.getData.call(void 0, 7); //getData function needs an integer argument for an id of users.

newData.then((result) => {
  //data transfer from the API is done (then) logs the results.
  console.log(result);
});
