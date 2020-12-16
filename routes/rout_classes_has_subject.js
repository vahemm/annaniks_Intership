const { Router } = require("express");
const Classes_has_subject = require("../models/model_classes_has_subject");
const router = Router();

router.get("/allsubjects/:classe_id", async (req, res) => {
  const subjects = await Classes_has_subject.where(
    "classesref",
    req.params.classe_id
  ).fetch({
    withRelated: ["subject"],
  });
  res.json(subjects.related("subject"));
  console.log("The request has been processed");
});

router.post("/student", async (req, res) => {
  const student = await Students.forge({
    name: req.body.name,
    surname: req.body.surname,
    birthday: req.body.birthday,
    student_classe: req.body.student_classe,
  }).save();

  res.json(student);
  console.log("The request has been processed");
});

router.put("/:id", async (req, res) => {
  const student = await Students.where("idstudent", req.params.id).save(
    {
      ...req.body,
    },
    { patch: true }
  );
  res.json(student);
  console.log("The request has been processed");
});

router.delete("/:id", async (req, res) => {
  const student = await Students.where("idstudent", req.params.id).destroy();
  res.json(student);
  console.log("The request has been processed");
});

module.exports = router;
