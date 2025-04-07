import jwt from "jsonwebtoken";


const generateTokenAndSetCookie = () => {
  const token = jwt.sign(User._id, process.env.JWT_SECRET_KEY);
};
