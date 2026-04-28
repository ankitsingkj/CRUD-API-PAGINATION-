const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,

  auth: {
    user: "ebba.mraz64@ethereal.email",
    pass: "N35Fp5v4kemeWCdHgM"
  }
});

module.exports = transporter;