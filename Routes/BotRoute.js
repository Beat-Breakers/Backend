// router.js
import express from 'express';
import { getResponse } from '../Controllers/BotController.js';
const router = express.Router();

router.post('/response', getResponse);

export default router;