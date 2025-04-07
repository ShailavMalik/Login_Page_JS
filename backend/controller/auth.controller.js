import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;

  // error handling for signup
  if (!name || !email || !password)
    res.status(400).json({ message: "Invalid Credentials" });

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save info with hash password to DB
  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  console.log("User Created");
   await res.json({ newUser});
};

export const signIn = () => {};

export const signOut = () => {};
