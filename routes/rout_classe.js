const { Router } = require("express");
const Classes = require("../models/model_classe");

const router = Router();

router.get("/all", async (req, res) => {
  const classes = await Classes.fetchAll();

  res.json(classes);
  console.log("The request has been processed");
});

router.get("/:id", async (req, res) => {
  const classe = await Classes.where("id", req.params.id).fetch();

  res.json(classe);
  console.log("The request has been processed");
});

router.post("/classe", async (req, res) => {
  console.log(req.body);
  const classe = await Classes.forge({
    classe_name: req.body.classe_name,
    classe_index: req.body.classe_index,
  }).save();

  res.json(classe);
  console.log("The request has been processed");
});

router.put("/:id", async (req, res) => {
  const classe = await Classes.where("id", req.params.id).save(
    {
      ...req.body,
    },
    { patch: true }
  );
  res.json(classe);
  console.log("The request has been processed");
});

router.delete("/:id", async (req, res) => {
  const classe = await Classes.where("id", req.params.id).destroy();
  res.json(classe);
  console.log("The request has been processed");
});

module.exports = router;
