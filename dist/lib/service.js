"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

async function getData(id) {
  try {
    const { data: users } = await _axios2.default.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const { data: posts } = await _axios2.default.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    const info = { ...users, posts: [...posts] };
    return info;
  } catch (err) {
    console.log(err);
  }
}

exports.getData = getData;
