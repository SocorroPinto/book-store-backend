const express = require("express");
const router = express.Router();

const BookModel = require("../models").Books;

router.get("/", async (req, res) => {
	let books = await BookModel.findAll();
	res.json({ books });
});

router.post("/", async (req, res) => {
	let book = await BookModel.create(req.body);
	res.json({ book });
});

router.get("/:id", async (req, res) => {
	let book = await BookModel.findByPk(req.params.id);
	res.json({ book });
});

router.put("/:id", async (req, res) => {
	let updBook = await BookModel.update(req.body, {
		where: { id: req.params.id },
		returning: true,
	});

	res.json({ updBook });
});

// DELETE A USER
router.delete("/:id", async (req, res) => {
	await BookModel.destroy({
		where: { id: req.params.id },
	});
	res.json({
		message: `Book with id ${req.params.id} was deleted`,
	});
});

module.exports = router;
