import express from "express";
import { check } from "express-validator";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const usersControllers = require("../controllers/users-controller");

// const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/:username", usersControllers.getUserLogged);

router.get("/", usersControllers.getUsers);

router.post(
  "/signup",
  [
    check("firstName"),
    check("lastName"),
    check("username").not().isEmpty(),
    check("email").normalizeEmail({ gmail_remove_dots: false }).isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersControllers.signup
);

router.post("/login", usersControllers.login);

// router.patch(
//   "/:username",
//   fileUpload.any("image"),
//   usersControllers.addProfileImage
// );

module.exports = router;
