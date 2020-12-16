const bookshelf = require("../db_config/bookshelf");
const Classes_has_subject = require("./model_classe");
const Subjects = bookshelf.Model.extend({
  tableName: "subject",

  classes() {
    return this.hasMany(Classes_has_subject, "subjectref", "subjectnum");
  },
});

module.exports = bookshelf.model("Subjects", Subjects);
