const { fetchBook, addBook, deleteBook, updateBook, singleFetchBook } = require("../Controllers/bookController")

const router = require("express").Router()
router.route("/books").get(fetchBook).post(addBook)
router.route("/books/:id").delete(deleteBook).patch(updateBook).get(singleFetchBook)

module.exports = router