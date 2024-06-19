const Books = require("../../models/books");

exports.booksGet = async (req, res) => {
  try {
    const books = await Books.find().select("-createdAt -updatedAt");
    return res.json(books);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.bookGetById = async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Books.findById(bookId).select("-createdAt -updatedAt");
    if (book) {
      return res.json(book);
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.bookCreate = async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    return res.status(201).json(newBook);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.bookUpdate = async (req, res) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Books.findById(bookId);
    if (foundBook) {
      await Books.updateOne({ _id: bookId }, req.body);
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.bookDelete = async (req, res) => {
  const { bookId } = req.params;
  try {
    const foundBook = await Books.findById(bookId);
    if (foundBook) {
      await Books.deleteOne({ _id: bookId });
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
