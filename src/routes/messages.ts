import { Router } from "express";
import { messageChat, messageThemes } from "../controllers/messages";

const router = Router();

router.get("/chat", messageChat);
router.post("/chat", messageChat);

router.get("/themes", messageThemes);
router.post("/themes", messageThemes);

export default router;
