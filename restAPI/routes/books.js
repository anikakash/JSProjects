import express from "express";
const router = express.Router();

// MOck database

const books = [
  {
    book_name: "German A1",
    writer: "Anik",
  },
  {
    book_name: "German A2",
    writer: "Anik",
  },
];

router.get("/", (req, res) => {
  res.send(books);
});

export default router;
