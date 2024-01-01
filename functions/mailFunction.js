

const welcomeMail = require('./email_templates/welcomeMail.js');







module.exports = function() {

    console.log(welcomeMail);

  const nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'Sixdigitguy@gmail.com',
      pass: process.env.APPPASSWORD
    }
  });
  
  var mailOptions = {
    from: 'Sixdigitguy@gmail.com',
    to: 'elduradoessien98@gmail.com',
    subject: 'Sending Email using Node.js',
    html: welcomeMail,
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });




      
  }



