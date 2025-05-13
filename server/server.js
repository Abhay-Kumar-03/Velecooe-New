import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import Contact from './models/Contact.js';
import cors from 'cors';
import connectToDb from "./db/db.js";

const app = express();

connectToDb();

app.use(cors());
app.use(express.json());


app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const contact = new Contact({
      name,
      phone,
      email,
      message
    });
    await contact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 