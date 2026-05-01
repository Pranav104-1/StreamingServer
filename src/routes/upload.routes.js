import { Router } from "express";
import upload from "../middelware/multer.js";
import { uploadVideo } from "../controller/upload.controller.js";
const router = Router();

router.post("/upload", upload.single("file"), uploadVideo);

export default router;
