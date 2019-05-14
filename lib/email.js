


const nodemailer = require('nodemailer');

const emailSetUp = ()=>{

  let transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: process.env.SENDGRID_USER,
      pass: process.env.SENDGRID_PASSWORD
    }
  });
  return transporter;
}

exports.sendComfirmEmail = (user) => {
    
    const mailOptions = {
      to: user.email,
      from: 'info@quickfact.com',
      subject: 'Welcome to quifact',
      html: `Your registration was successful <br> Please comfirm your email by clicking this link <a href="${process.env.BASE_URL}/comfirmation/${user.activationToken}">${process.env.BASE_URL}/comfirmation/${user.activationToken}</a>`
    };
    transporter = emailSetUp();
    return transporter.sendMail(mailOptions)
      .then(() => {
        req.flash('success', { msg: 'Succesful Registration!' });
      })
      .catch((err) => {
        if (err.message === 'self signed certificate in certificate chain') {
          console.log('WARNING: Self signed certificate in certificate chain. Retrying with the self signed certificate. Use a valid certificate if in production.');
         
          const transporter = emailSetUp();
          return sendMail(mailOptions)
            .then(() => {
              req.flash('success', { msg: 'Success! .' });
            });
        }
        console.log('ERROR: Could not send password reset confirmation email after security downgrade.\n', err);
        req.flash('warning', { msg: 'Your registration was successful' });
        return err;
      });
  };