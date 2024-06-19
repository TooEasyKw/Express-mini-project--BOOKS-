require("dotenv").config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const connectDB = require("./database");
const booksRoutes = require("./apis/books/books.routers");
const authRoutes = require("./apis/auth/auth.routers");
const errorHandler = require("./Middlewares/errorHandler");
const notFoundHandler = require("./Middlewares/notFoundHandler");
const cors = require("cors");

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/books", booksRoutes);
app.use("/auth", authRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

connectDB();
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
