import { Router } from "express";
import messageController from "../controllers/messages";

const router = Router();

router.get('/', messageController);
router.post('/', messageController);

export default router;