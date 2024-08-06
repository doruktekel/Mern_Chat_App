import express from "express";
import {
  getMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage); // id is senderId  // selectedConversation id

export default router;
