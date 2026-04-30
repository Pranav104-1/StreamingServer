import express from "express";
import cors from "cors";
import uploadRoutes from "./src/routes/upload.routes.js";

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", uploadRoutes);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
