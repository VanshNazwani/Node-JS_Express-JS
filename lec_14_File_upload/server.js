import express from "express";
import path from "path";
import mongoose from "mongoose";
import multer from "multer";

const app = express();

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

// Public folder for static files
app.use(express.static(path.join(process.cwd(), "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index"); // make sure views/index.ejs exists
});

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/NodeJS")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.error("❌ MongoDB error:", error));

// Multer storage setup
const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "public", "uploads"), // save files in public/uploads
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Upload route
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("📂 Uploaded file:", req.file);
  res.send("✅ File uploaded successfully!");
});

// Start server
app.listen(3000, () => console.log("🚀 Server is running at port 3000"));
