/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.faq = (req, res) => {
  res.render('faq', {
    title: 'Faq'
  });
};

exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};
exports.contact = (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
};
