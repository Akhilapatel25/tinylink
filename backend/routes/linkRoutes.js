import express from "express";
import {
  createLink,
  getLinks,
  getOne,
  deleteLink
} from "../controllers/linkController.js";

const router = express.Router();

router.post("/", createLink);
router.get("/", getLinks);
router.get("/:code", getOne);
router.delete("/:code", deleteLink);

export default router;
