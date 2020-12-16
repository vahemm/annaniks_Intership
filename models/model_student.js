const bookshelf = require("../db_config/bookshelf");
const Classes = require("./model_classe");
const Students = bookshelf.Model.extend({
  tableName: "students",

  classe() {
    return this.belongsTo(Classes, "idclasse", "studentclasse");
  },
});

module.exports = bookshelf.model("Students", Students);
