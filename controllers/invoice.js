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


  exports.postInvoice = (req, res, next) => {
    // req.assert('companyName', 'Company name can not be blank').notEmpty();
    // req.assert('issuingCompany', 'issuing company cant be blank').notEmpty();
    // req.assert('value', 'you must provide the amount').notEmpty();
    // req.assert('registrationNumber', 'Please provide the Registration number').notEmpty();
    // req.assert('address',' is required').notEmpty();
    // req.assert('amountInwords','amount in words').notEmpty();
    // req.assert('dateIssued','Date issued is required').notEmpty();
    // req.assert('RC-Number','RC number is required').notEmpty();
  console.log(req.body,'body is not available');

    const errors = req.validationErrors();
    if (errors) {
      req.flash('errors', errors);
    
      return res.redirect('/invoice/create');
    }
    const invoice = new Invoice({
      companyName: req.body.companyName,
      issuingCompany: req.body.password,
      value : req.body.value,
      registrationNumber: req.body.registrationNumber,
      address : req.body.address,
      amountInwords : req.body.amountInwords,
      invoiceDetails : req.body.invoiceDetails,
      postedBy : req.user,
      dateIssued: req.body.dateIssued,
      registrationNumber : req.body.regNumber,
      issuerAddress :req.body.issuerAddress,
      issuerContactPerson : req.body.issuerContactPerson
    });

    invoice.save((err) => {
      if (err) {
        if (err.code === 11000) {
          //req.flash('errors', { msg: 'The email address you have entered is already associated with an account.' });
          return res.redirect('/invoice/create');
        }
        return next(err);
      }
      req.flash('success', { msg: 'your invoice information has been updated.' });
      res.redirect('/invoice');
    });
  
  }

