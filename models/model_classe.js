const bookshelf = require("../db_config/bookshelf");
const Students = require("./model_student");
const Classes_has_subject = require("./model_classes_has_subject");
const Classes = bookshelf.Model.extend({
  tableName: "classes",

  student() {
    return this.hasMany(Students, "studentclasse", "idclasse");
  },
  subject() {
    return this.hasMany(Classes_has_subject, "classesref", "idclasse");
  },
});

module.exports = bookshelf.model("Classes", Classes);
