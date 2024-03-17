import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

// MOck database

const users = [];

router.post("/", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`${user.first_name} has been added to the DB`);
});

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`${id} deleted successfully from the DB`);
});

export default router;
