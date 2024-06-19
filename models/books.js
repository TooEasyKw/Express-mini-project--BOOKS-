const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, null: false },
    author: { type: String, required: true, null: false },
    price: { type: Number, default: 5 },
    image: {
      type: String,
      default:
        "hhttps://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
