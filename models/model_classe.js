const bookshelf = require("../db_config/bookshelf");
const Students = require("./model_student");
const Classes = bookshelf.Model.extend({
  tableName: "classes",
  student() {
    this.hasMany(Students, "id", "student_classe");
  },
});

module.exports = Classes;
