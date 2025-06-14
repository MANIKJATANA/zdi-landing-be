import dotenv from 'dotenv';
import axios from 'axios';
import { Request, Response } from 'express';
import { transformSections } from '../mappers/transformSections';

dotenv.config();

const STRAPI_URL = process.env.STRAPI_URL;

export const getLandingContent = async (req: Request, res: Response) => {
  if (!STRAPI_URL) {
    res.status(500).json({ message: 'Strapi URL is not configured' });
  }

  try {
    const response = await axios.get(`${STRAPI_URL}/homepage`);
    const rawSections = response.data.Sections;

    if (!rawSections || !Array.isArray(rawSections)) {
      res.status(400).json({ message: 'Invalid section data from Strapi' });
    }

    const content = transformSections(rawSections);
    res.json(content);
  } catch (err) {
    console.error('Error fetching or transforming landing content:', err);
    res.status(500).json({ message: 'Error fetching landing content' });
  }
};
