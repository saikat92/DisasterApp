const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dotenv = require("dotenv");

dotenv.config();
admin.initializeApp({ credential: admin.credential.cert(require("./serviceAccountKey.json")) });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running!"));

// Import and use API routes
// app.use("/api/disasters", require("./routes/disasterRoutes"));

const predictionsRoute = require("./routes/predictions");
app.use("/api/predictions", predictionsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
