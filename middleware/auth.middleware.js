// Simple route middleware to ensure user is authenticated.
const is_logged_in = (req, res, next)=> {
    if (req.isAuthenticated())
        return next();

    req.flash('message', 'Please login to access this content');
    res.redirect('/');
};

module.exports = {
    is_logged_in
}