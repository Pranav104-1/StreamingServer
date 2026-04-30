import { Router } from "express";
import upload from "../middelware/multer.js";

const router = Router();

router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.send('File uploaded successfully.');
});


export default router;