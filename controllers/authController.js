require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models").User;

let UserInfo = class {
	constructor() {
      this.token = null,
      this.id = null,
      this.name = null,
      this.username = null,
      this.password = null,
      this.email = null,
      this.administrator = null
	}

	init = (token, foundUser, pass) => {
    console.log('Here is myfound user', foundUser)
      this.token = token;
      this.id = foundUser.id;
      this.name = foundUser.name;
      this.username = foundUser.username;
      this.password = pass;
      this.email = foundUser.email;
      this.administrator = foundUser.administrator;
	}
};

const myUser = new UserInfo();

// SIGN OUT ROUTE
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/signup", (req, res) => {
  console.log(req.body);
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);

    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPwd;

      UserModel.create(req.body)
        .then((newUser) => {
          const token = jwt.sign(
            {
              username: newUser.username,
              id: newUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log(token);
          myUser.init(token, newUser, req.body.password);
          // res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          // res.redirect(`/users/profile/${newUser.id}`);
          res.json({ myUser });
        })
        .catch((err) => {
          console.log(err);
          res.send(`err ${err}`);
        });
    });
  });
});

// POST LOGIN
router.post("/login", (req, res) => {
  UserModel.findOne({
    where: {
      username: req.body.username,
    }
  }).then((foundUser) => {
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
        if (match) {
          const token = jwt.sign(
            {
              username: foundUser.username,
              id: foundUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );

          myUser.init(token, foundUser, req.body.password);
          // res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          // res.redirect(`/users/profile/${foundUser.id}`);
          res.json({ myUser });
        } else {
          return res.sendStatus(400);
        }
      });
    }
  });
});

module.exports = router;
