import express from "express";
import { createUser, getAllUsers } from "../controllers/userController.js";

const router = express.Router();

// Route for creating a user
router.post("/", createUser);

// Route for fetching all users
router.get("/", getAllUsers);

export default router;
