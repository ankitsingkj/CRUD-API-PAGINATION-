const transporter = require("../config/mailer");
const nodemailer = require("nodemailer");

const sendGroupMail = async (req, res) => {
  try {
    const emails = [
      "user1@gmail.com",
      "user2@gmail.com",
      "user3@gmail.com"
    ];

    const info = await transporter.sendMail({
      from: "ebba.mraz64@ethereal.email",
      to: emails,
      subject: "Group Email",
      text: "Hello from Ethereal email!"
    });

    // IMPORTANT — email preview link
    console.log(
      "Preview URL:",
      nodemailer.getTestMessageUrl(info)
    );

    res.json({
      message: "Mail sent successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  sendGroupMail
};