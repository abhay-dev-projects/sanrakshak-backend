import User from '../../models/user.js';
import { config } from "dotenv";

config({
  path: ".env"
});

const upload = async (req, res) => {
  const { email, password } = req.body;
  
  try {

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Invalid email or password.' });
  }
}

export default upload;