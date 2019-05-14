exports.getDashboard = (req, res) => {
    if (req.user && req.user.role == 'admin') {
      return res.redirect('/account');
    }
    res.render('account/login', {
      title: 'Login'
    });
  };