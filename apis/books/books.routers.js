const express = require("express");
const router = express.Router();
const {
  booksGet,
  bookGetById,
  bookCreate,
  bookUpdate,
  bookDelete,
} = require("./books.controller");
const authMiddleware = require("../../Middlewares/auth");

router.get("/", authMiddleware, booksGet);
router.get("/:bookId", authMiddleware, bookGetById);
router.post("/", authMiddleware, bookCreate);
router.put("/:bookId", authMiddleware, bookUpdate);
router.delete("/:bookId", authMiddleware, bookDelete);

module.exports = router;
