import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Interface pour étendre Request avec une propriété `user`
interface AuthRequest extends Request {
  user?: any; // Au besoin préciser le user.
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
