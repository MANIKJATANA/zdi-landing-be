import axios from 'axios';
import { Request, Response } from 'express';

const STRAPI_URL = process.env.STRAPI_URL;

export const getLandingContent = async (req: Request, res: Response) => {
    if (!STRAPI_URL) {
        res.status(500).json({ message: 'Strapi URL is not configured' });
    } else {
        // Fetch landing page content from Strapi
        try {
            const response = await axios.get(`${STRAPI_URL}/api/landing-page?populate=*`);
            res.json(response.data);
        } catch (err) {
            
            res.status(500).json({ message: 'Error fetching landing content' });
        }
    }
};
