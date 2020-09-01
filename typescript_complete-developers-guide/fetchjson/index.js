"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
/*
 * call the url and wait (.then()) for a response which will be placed in the var, "response"
 */
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
