const bookshelf = require("../db_config/bookshelf");
const Classes = require("./model_classe");
const Subject = require("./model_subjects");
const Classes_has_subject = bookshelf.Model.extend({
  tableName: "classes_has_subject",

  classe_name() {
    return this.belongsTo(Classes, "classesref", "idclasse");
  },
  subject() {
    return this.belongsTo(Subject, "subjectref", "subjectnum");
  },
});

module.exports = bookshelf.model("Classes_has_subject", Classes_has_subject);
