import { Router } from "express";
import { createCard, getCardStatus, updateCardStatus } from "../controllers/CardController";

const router = Router();

router
    .post('/cards', createCard)
    .patch('/cards/:ID/status', updateCardStatus)
    .get('/cards/:ID', getCardStatus)

export default router;