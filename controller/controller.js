let express = require("express");
let catModal = require("../modals/Cat");
let router = express.Router();

async function postCat(cat) {
  return catModal.postCat(cat);
}

async function getAllCats(cat) {
  return catModal.getAllCats(cat);
}

module.exports = { getAllCats, postCat };
