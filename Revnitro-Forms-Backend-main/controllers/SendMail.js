const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Hostinger SMTP server address
  port: 465, // Port for non-secure connection, use 465 for secure connection
  secure: true, // Set to true for secure connection (use port 465)
  auth: {
    user: process.env.nodeMailer_User,
    pass: process.env.nodeMailer_Pass,
  },
});
async function sendMail(toEmail, subject, content) {
  const mailOptions = {
    from: process.env.nodeMailer_User,
    to: toEmail,
    subject: subject,
    html: content,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error occured", error);
    } else {
      console.log("email sent:", info.response);
    }
  });
}

module.exports = { sendMail };
