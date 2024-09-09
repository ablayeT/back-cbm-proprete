import { Router } from "express";
import { register, login } from "../controllers/authController";
import { check } from "express-validator";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.post(
  "/register",
  [
    check("first_name", "First name is required").not().isEmpty(),
    check("last_name", "Last name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 8,
    }),
  ],
  register
);

router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  login
);

export default router;
