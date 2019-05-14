const Invoice = require('../models/Invioce');

exports.getInvoice = (req, res) => {
    if (req.user) {
        res.render('account/invoice/index', {
            title: 'My invoice'
          });
    }
    
   // return res.redirect('/account');
  };

  exports.createInvoice = (req, res) => {
    if (req.user) {
        res.render('account/invoice/create', {
            title: 'My invoice'
          });
          console.log(req.user._id, 'the current logged in user');
    }else{
    
    return res.redirect('/signup');
    }
  };


  exports.postInvice = (req, res, next) => {
    req.assert('companyname', 'Email is not valid').notEmpty();
    req.assert('issuingCompany', 'Password cannot be blank').notEmpty();
    req.sanitize('value').normalizeEmail({ gmail_remove_dots: false });
  
    
    if (errors) {
      req.flash('errors', errors);
    
      return res.redirect('/invoice/create');
    }
    const invoice = new Invoice({
      companyName: req.body.email,
      issuingCompany: req.body.password,
      value : req.body.amount,
      registrationNumber: req.body.registrationNumber,
      address : req.body.address,
      amountInwords : req.body.amountInwods,
      postedBy : req.user,
      dateIssued: req.body.dateIssued,
      

    });
  }