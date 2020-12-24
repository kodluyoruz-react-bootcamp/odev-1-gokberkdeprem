"use strict";var _types = require('sucrase/dist/parser/tokenizer/types');
var _service = require('./lib/service');

let newData = _service.getData.call(void 0, 7);

newData.then((result) => {
  console.log(result);
});
