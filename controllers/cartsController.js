const express = require("express");
const router = express.Router();

//const BookModel = require("../models").Books;
const CartModel = require("../models").Cart;
const CartDetModel = require("../models").CartDetails;
const BookModel = require("../models").Books;

router.get("/", async (req, res) => {
    let carts = await CartModel.findAll({
        include: CartDetModel
    });
    res.json({ carts });
});

router.post("/", async (req, res) => {
    let cart = await CartModel.create(req.body);
    res.json({ cart });
});

router.get("/:id", async (req, res) => {
    let cart = await CartModel.findByPk(req.params.id);
    res.json({ cart });
});
  
router.put("/:id", async (req, res) => {
    let updCart = await CartModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });

    let cart = await CartModel.findByPk(req.params.id, {
        include: CartDetModel,
    });    
  
    res.json({ cart });
});
  
  // DELETE A USER
router.delete("/:id", async (req, res) => {
    await CartModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `Cart with id ${req.params.id} was deleted with their details`,
    });
});

module.exports = router;