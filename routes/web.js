const marker        = require('@ajar/marker');
const express       = require('express');
const router = express.Router();
const raw = require('../middleware/route.async.wrapper');

// const user_model    = require('../models/user.model')
// const is_logged_in  = require('../middleware/auth.middleware').is_logged_in


// //--------------------
// //  homepage
// //--------------------
router.get('/',raw(async (req, res)=> {
    const msg = "welcome to my homepage"
    res.render('homepage',{message:msg,user:req.user});
}));

// router.get('/',  (req, res) => {
//     res.render('homepage',{message:msg,user:req.user});
// });
// //--------------------
// //  signup
// //--------------------
// router.get('/signup', raw(async(req, res)=> {
//     res.render('signup');
// }));

// //--------------------
// //  create user form
// //--------------------
// router.get('/user/create', is_logged_in, raw(async(req, res)=> {
//     res.render('user_create',{user:req.user});
// }));

// //--------------------
// //  users list
// //--------------------
// router.get('/users',  raw(async(req, res)=> {
//   const users =  await user_model.find()
//   res.render('users_list',{users,user:req.user,loggedIn:req.isAuthenticated()});
// }));

// //--------------------
// //  update user form
// //--------------------
// router.get('/users/edit/:id', is_logged_in, raw(async (req, res)=> {
//   const user =  await user_model.findById(req.params.id)
//   res.render('user_update',{user});
// }));

module.exports = router;
