var express = require('express');
var router = express.Router();
const contact=require('../model/contact')
const ContactController = require('../Controller/ContactController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// GET ALL ARRAY ELEMENT 
router.get('/list',async (req,res)=>{
  let isExist= await contact.find();
  // console.log(isExist);
  res.send({result:isExist})
} )
// ADD CRUD OPERATION 
router.post('/list',ContactController.addDetails)
// CHECK MOBILE NUMBER 
router.post('/check-mobile',ContactController.check)
// DELETE CRUD OPERATION 
router.post('/delete',ContactController.delete)
// EDIT CRUD OPERATION 
router.get("/update/:id",ContactController.editContact)
// UPDATE CRUD OPERATION 
router.put("/update/:id" , ContactController.updateContact);

module.exports = router;
