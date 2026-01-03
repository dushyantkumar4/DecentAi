import { Router } from "express";
import { aiChat, chat, deleteThread, getAllThread, getThread } from "../controllers/chat.controller.js";
import Thread from "../models/Thread.js";

const router = Router();

//chat
router.post("/ai/chat", aiChat);

// get all thread 
router.get("/thread",getAllThread);

router.post("/chat",chat);


router.get("/thread/:threadId",getThread);

// delete chat
router.delete("/thread/:threadId",deleteThread);


export default router;
