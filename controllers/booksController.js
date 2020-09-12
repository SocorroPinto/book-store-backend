const express = require("express");
const db = require("../models");
const router = express.Router();

const BookModel = require("../models").Books;

let Libros = class {
	constructor() {
		this.books = {
			limit: null,
			offset: null,
			books: null,
		};
	}

	init = (query) => {
		if (query.hasOwnProperty("limit")) {
			this.books.limit = parseInt(query.limit);
			this.books.offset = 0;
		}

		if (query.hasOwnProperty("offset")) {
			this.books.offset = parseInt(query.offset);
			this.books.limit = this.books.limit ? this.books.limit : 6;
		}
	};
};

router.get("/", async (req, res) => {
	const myBooks = new Libros();
	myBooks.init(req.query);

	if (myBooks.books.limit && myBooks.books.offset !== null) {
		myBooks.books.books = await BookModel.findAll({
			limit: myBooks.books.limit,
			offset: myBooks.books.offset,
		});
	} else {
		myBooks.books.books = await BookModel.findAll();
	}

	res.json({ myBooks });
});

router.get("/mostrated", async (req, res) => {
	const myBooks = new Libros();
	myBooks.init(req.query);

	if (myBooks.books.limit && myBooks.books.offset !== null) {
		myBooks.books.books = await BookModel.findAll({
			order: [["Rating", "DESC"]],
			limit: myBooks.books.limit,
			offset: myBooks.books.offset,
		});
	} else {
		myBooks.books.books = await BookModel.findAll({
			order: [["Rating", "DESC"]],
		});
	}

	res.json({ myBooks });
});

router.get("/mostselled", async (req, res) => {
	const myBooks = new Libros();
	myBooks.init(req.query);

	myQuery = 'Select "Books".* ';
	myQuery +=
		'From "Books" LEFT JOIN (Select "CartDetails"."BookId", sum("CartDetails"."Quantity") vendidos ';
	myQuery +=
		'          From "Carts" JOIN "CartDetails" ON "Carts"."id" = "CartDetails"."CartId" ';
	myQuery += "          Where \"Status\" = 'Confirmed' ";
	myQuery +=
		'          Group by "CartDetails"."BookId") AS "Selled" ON "Books"."id" = "Selled"."BookId" ';
	myQuery += 'Order by COALESCE("Selled"."vendidos", 0) Desc';

	if (myBooks.books.limit && myBooks.books.offset !== null) {
		myBooks.books.books = await db.sequelize.query(`${myQuery}`, {
			model: BookModel,
			limit: myBooks.books.limit,
			offset: myBooks.books.offset,
			mapToModel: true, // pass true here if you have any mapped fields
		});
	} else {
		myBooks.books.books = await db.sequelize.query(`${myQuery}`, {
			model: BookModel,
			mapToModel: true, // pass true here if you have any mapped fields
		});
	}

	res.json({ myBooks });
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
