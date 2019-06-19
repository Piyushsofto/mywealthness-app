const express = require('express');
const router = express.Router();
const utils = require('../config/utils');
var passport = require('passport');
const User = require('../models').User;

router.get('/',function (req, res, next){
    User.findAll({where:{userId:req.body.userId}}).then((data) => {

        res.json({ success: true,data: data})

 
}).catch(next);
})

/* Add new user. */

router.post('/', function (req, res, next) {
    User.create(req.body).then(() => {

            res.json({ success: true })
    
     
    }).catch(next);
});

















// /* Update user by ID. */

// router.patch('/:id', passport.authenticate('jwt', { session: false }), function (req, res, next) {
//     let newData = {};
//     let query = {};

//     utils.validateQuery(req.body, newData, 'email');
//     utils.validateQuery(req.body, newData, 'status');
//     utils.validateQuery(req.body, newData, 'fullName');
//     utils.validateQuery(req.body, newData, 'birthday');
//     utils.validateQuery(req.body, newData, 'education');
//     utils.validateQuery(req.body, newData, 'risk');


//     if (req.body.password && req.body.password.length)
//         newData.password = User.generateHash(req.body.password);

//     if (newData.errors)
//         return next(newData.errors[0]);

//     query.where = { id: req.params.id };

//     User.update(newData, query).then(() => {

//         res.json({ success: true });
//     }).catch(next)
// });

// /* Delete user by ID. */

// router.delete('/:id', passport.authenticate('jwt', { session: false }), function (req, res, next) {

//     User.destroy({
//         where: { id: req.params.id },
//     }).then(() => {

//         res.json({ success: true });
//     }).catch(next)
// });

module.exports = router;