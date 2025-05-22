const { fetchBook, addBook, deleteBook, updateBook, singleFetchBook } = require("../Controllers/bookController")

const router = require("express").Router()
router.route("/").get(fetchBook).post(addBook)
router.route("/:id").delete(deleteBook).patch(updateBook).get(singleFetchBook)

module.exports = router





