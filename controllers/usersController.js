const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const CartModel = require("../models").Cart;

// GET USERS PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    
    include: [ { model: CartModel,
                  required: false,
                  where: { Status: 'New'} }],
            });
  res.json({ user });
});

module.exports = router;
