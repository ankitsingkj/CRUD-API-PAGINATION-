const express = require("express");
const connectDB = require("./config/db");

require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

// Routes
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/groupRoutes"));
app.use("/api", require("./routes/emailRoutes"));
app.use("/api", require("./routes/authRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});