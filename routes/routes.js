let express = require("express");
let router = express.Router();
let controller = require("../controller/controller");

router.get("/", async (req, res) => {
  //call controller logic
  let result = await controller.getAllCats();
  res.json({ statusCode: 200, message: "success", data: result });
});

router.post("/", async (req, res) => {
  let cat = req.body;
  let result = await controller.postCat(cat);
  res.json({ statusCode: 201, message: "success", data: result });
});


module.exports = router;
