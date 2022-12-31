const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));
app.post('/contact_us',async (req,res)=>{
    const { name, email, message } = req.body.contacts;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "pranshu05012002@gmail.com", // generated ethereal user
        pass: "nepbuuzctuhkpzsl", // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    var mailOptions = {
      from: "pranshu05012002@gmail.com",
      to: ["20cs3077@rgipt.ac.in"],
      subject: "Portfolio Email",
      html: `<p>Name of sender: ${name}</p>
      <p>Email id of sender: ${email}</p>
      <p>Here's what was received : ${message}</p>
      <p>Cheers!</p>`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return res.redirect("/");
})

const server = app.listen(5000, () => {
  console.log(`Server is Up on port 5000!`);
});