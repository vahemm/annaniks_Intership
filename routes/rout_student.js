const { Router } = require("express");
const Students = require("../models/model_student");
const router = Router();

router.get("/all", async (req, res) => {
  const students = await Students.fetchAll();
  res.json(students);
});

router.get("/:id", async (req, res) => {
  const student = await Students.where("idstudent", req.params.id).fetch();
  res.json(student);
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
