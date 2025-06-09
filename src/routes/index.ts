import express, { Request, Response } from 'express';
import { getLandingContent } from '../controllers/landingPageController';

const router = express.Router();

router.get('/', getLandingContent);

export default router;