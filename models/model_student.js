const bookshelf = require("../db_config/bookshelf");
const Classes = require("./model_classe");
const Students = bookshelf.Model.extend({
  tableName: "students",
  classe() {
    return this.belongTo(Classes, "students_classe", "id");
  },
});

module.exports = Students;
