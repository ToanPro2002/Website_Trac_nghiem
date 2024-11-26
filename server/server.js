
const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // TODO: Xử lý file Excel ở đây (chẳng hạn đọc nội dung)
  res.status(200).send("File uploaded successfully!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
