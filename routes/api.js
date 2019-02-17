const marker        = require('@ajar/marker');
const express       = require('express');
const router = express.Router();
const raw = require('../middleware/route.async.wrapper');

 const user_model    = require('../server/models/user.model');
//const is_logged_in  = require('../middleware/auth.middleware').is_logged_in;

//--------------------
//    create  user
//--------------------
router.post('/user',//is_logged_in
raw(async (req, res)=> {
    const user = await user_model.create(req.body)    
    marker.d('user created, first_name:',user.first_name)
    res.redirect('/users');
}));

//--------------------
//    update  user
//--------------------
// router.post('/user/:id',is_logged_in,raw(async (req, res)=> {
//     const _id = req.params.id;
//     const rows_affected = await user_model.findOneAndUpdate({_id},req.body)
//     marker.info('rows_affected:',rows_affected)                     
//     res.redirect('/users');                          
// }));

// //--------------------
// //    delete  user
// //--------------------
// router.delete('/user/:id',is_logged_in, raw( async (req, res)=> {
//     await user_model.deleteOne({_id:req.params.id})
//     res.status(200).json({status:'OK',message:'user removed.'});
// }));

module.exports = router;