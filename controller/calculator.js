let database = require("../database");

let CalcController = {
  basic: (req, res) => {
    res.render("calculator/index");
  },

  tax: (req, res) => {
    res.render("calculator/taxes");
  },
};

module.exports = CalcController;
