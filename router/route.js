import { Router } from "express";
const router = Router();

/** import all controllers */
import * as controller from "../controllers/appController.js";
import { registerMail } from "../controllers/mailer.js";
import Auth, { localVariables } from "../middleware/auth.js";

/** POST Methods */
router.route("/register").post(controller.register); // register user
router.route("/registerMail").post(registerMail); // send the email
router
  .route("/authenticate")
  .post(controller.verifyUser, (req, res) => res.end()); // authenticate user
router.route("/login").post(controller.verifyUser, controller.login); // login in app
router.route("/addActivity").post(Auth, controller.addActivity);
router.route("/conversation").post(controller.newConversation);
router.route("/messages").post(controller.sendMessage);

/** GET Methods */
router.route("/user/:username").get(controller.getUser); // user with username
router.route("/getActivity").get(controller.getActivity); // user with username
router.route("/users/friends/:userId").get(controller.getFriends); // user with username
router
  .route("/generateOTP")
  .get(controller.verifyUser, localVariables, controller.generateOTP); // generate random OTP
router
  .route("/generate2FAOTP")
  .get(controller.verifyUser, localVariables, controller.generate2FAOTP);
router.route("/verifyOTP").get(controller.verifyUser, controller.verifyOTP); // verify generated OTP
router
  .route("/verify2FAOTP")
  .get(controller.verifyUser, controller.verify2FAOTP); // verify generated OTP
router.route("/createResetSession").get(controller.createResetSession); // reset all the variables
router.route("/conversation/:userId").get(controller.getUserConversation);
router.route("/users").get(controller.getUserId);
router.route("/getAllUsers/:userId").get(controller.getAllUsers);
// router.route("/user/:userId").get(controller.getUserDetails);
router
  .route("/conversation/find/:firstUserId/:secondUserId")
  .get(controller.getUsersConversation);
router.route("/messages/:conversationId").get(controller.getMessage);

/** PUT Methods */
router.route("/updateuser").put(Auth, controller.updateUser); // is use to update the user profile
router
  .route("/resetPassword")
  .put(controller.verifyUser, controller.resetPassword); // use to reset password

export default router;
