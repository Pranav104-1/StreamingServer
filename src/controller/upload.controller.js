import { v4 as uuidv4 } from "uuid";

export const uploadVideo = (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const videoid = uuidv4();
  const filePath = req.file.path;
  console.log(`File uploaded successfully: ${filePath}`);

  return res.status(201).json({
    message: "File uploaded successfully.",
    videoid,
    filePath,
    hlsPath: null,
  });
};
