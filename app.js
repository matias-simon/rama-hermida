const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a route to handle the form submission
app.post("/", (req, res) => {
  const { name, email, phone, message } = req.body;

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmail", // e.g., Gmail, Yahoo, etc.
    auth: {
      user: "matias.f.simon@gmail.com", // Replace with your email address
      pass: "FedericO", // Replace with your email password
    },
  });

  // Configure the email options
  const mailOptions = {
    from: "matias.f.simon@gmail.com", // Replace with your email address
    to: "matias.simon@hotmail.com", // Replace with the recipient's email address
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.messageId);
      res.send("Email sent successfully!");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
