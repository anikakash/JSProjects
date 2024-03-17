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

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { first_name, email, department } = req.body;

  const user = users.find((user) => user.id === id);

  if (user) {
    if (first_name) user.first_name = first_name;
    if (email) user.email = email;
    if (department) user.department = department;

    res.send(`user with the ${id} has been updated.`);
  } else {
    res.status(404).send(`User with the id ${id} not found.`);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.send(`User with id ${id} deleted successfully from the DB`);
  } else {
    res.status(404).send(`User with id ${id} not found`);
  }
});

export default router;
