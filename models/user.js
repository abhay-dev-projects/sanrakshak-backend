import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "https://t3.ftcdn.net/jpg/03/64/62/36/360_F_364623623_ERzQYfO4HHHyawYkJ16tREsizLyvcaeg.jpg"
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  googleId: {
    type: String
  },
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cases',
  },
}, { timestamps: true });

const User = mongoose.model("Users", schema);

export default User;

