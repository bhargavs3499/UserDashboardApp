import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { E_MAIL, PASS_WORD } from "../config.js";
import { EMAIL } from "../config.js";

// // https://ethereal.email/create
// let nodeConfig = {
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "velma.kerluke@ethereal.email", //ENV.EMAIL, // generated ethereal user
//     pass: "wE218AvfhSNrNUR2rR", //ENV.PASSWORD, // generated ethereal password
//   },
// };

// let transporter = nodemailer.createTransport(nodeConfig);

// let MailGenerator = new Mailgen({
//   theme: "default",
//   product: {
//     name: "Mailgen",
//     link: "https://mailgen.js/",
//   },
// });

// /** POST: http://localhost:8080/api/registerMail
//  * @param: {
//   "username" : "example123",
//   "userEmail" : "admin123",
//   "text" : "",
//   "subject" : "",
// }
// */
// export const registerMail = async (req, res) => {
//   const { username, userEmail, text, subject } = req.body;

//   //   // body of the email
//   var email = {
//     body: {
//       name: username,
//       intro:
//         text || `Welcome ${username}! We're very excited to have you on board.`,
//       outro:
//         "Need help, or have questions? Just reply to this email, we'd love to help.",
//     },
//   };

//   var emailBody = MailGenerator.generate(email);

//   let message = {
//     from: EMAIL,
//     to: userEmail,
//     subject: subject || "Signup Successful",
//     html: emailBody,
//   };

//   //   // send mail
//   transporter
//     .sendMail(message)
//     .then(() => {
//       return res
//         .status(200)
//         .send({ msg: "You should receive an email from us." });
//     })
//     .catch((error) => res.status(500).send({ error }));
// };

/******************************************************************************************** */

/** send mail from real gmail account */

let config = {
  service: "gmail",
  auth: {
    user: E_MAIL,
    pass: PASS_WORD,
  },
};

let transporter = nodemailer.createTransport(config);

let MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Mailgen",
    link: "https://mailgen.js/",
  },
});

// let response = {
//   body: {
//     name: "Daily Tuition",
//     intro: "Your bill has arrived!",
//     table: {
//       data: [
//         {
//           item: "Nodemailer Stack Book",
//           description: "A Backend application",
//           price: "$10.99",
//         },
//       ],
//     },
//     outro: "Looking forward to do more business",
//   },
// };
export const registerMail = async (req, res) => {
  const { username, userEmail, text, subject } = req.body;

  // body of the email
  var email = {
    body: {
      name: username,
      intro:
        text || `Welcome ${username}! We're very excited to have you on board.`,
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  let emailBody = MailGenerator.generate(email);

  let message = {
    from: E_MAIL,
    to: userEmail,
    subject: subject || "Signup Successful",
    html: emailBody,
  };

  // send mail
  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        msg: "You should receive an email from us.",
      });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });

  //   transporter
  //     .sendMail(message)
  //     .then(() => {
  //       return res
  //         .status(200)
  //         .send({ msg: "You should receive an email from us." });
  //     })
  //     .catch((error) => res.status(500).send({ error }));
};
