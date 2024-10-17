const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conectar ao banco de dados MongoDB
// mongoose.connect("mongodb://localhost:27017/casal-resolve", { useNewUrlParser: true, useUnifiedTopology: true });
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/casal-resolve";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

// Modelo de Usuário
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Rota de Registro
app.post("/api/register", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered!" });
});

// Rota de Login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: "Invalid credentials" });
  }
  const token = jwt.sign({ userId: user._id }, "secretkey");
  res.json({ token });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
