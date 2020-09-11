const express = require("express");
const router = express.Router();

//const CartModel = require("../models").Cart;
const CartDetModel = require("../models").CartDetails;
const BookModel = require("../models").Books;

router.get("/", async (req, res) => {
    let cartDetails = await CartDetModel.findAll({
        include: BookModel
    });
    res.json({ cartDetails });
});

router.post("/", async (req, res) => {
    let cartDetail = await CartDetModel.create(req.body);
    res.json({ cartDetail });
});

router.get("/:id", async (req, res) => {
    let cartDetail = await CartDetModel.findByPk(req.params.id, {
        include: BookModel,
    });
    res.json({ cartDetail });
});
  
router.put("/:id", async (req, res) => {
    let updCartDet = await CartDetModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    let cartDetail = await CartDetModel.findByPk(req.params.id, {
        include: BookModel,
    });    
  
    res.json({ cartDetail });
});
  
  // DELETE A USER
router.delete("/:id", async (req, res) => {
    await CartDetModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `Cart Detail with id ${req.params.id} was deleted`,
    });
});

module.exports = router;