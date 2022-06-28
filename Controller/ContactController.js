const contact = require("../model/contact");


exports.addDetails=async (req,res)=>{
    let create= await contact.create(req.body);
    console.log("hello",req.body);
    res.send({success:"CONTACT ADDED SUCCESSFULLY"})
  } 

  exports.check=async (req,res)=>{
    let phoneNumbers=[];
    let isExist= await contact.find({});
    
    if(isExist && isExist.length){
    for(let i=0;i<isExist.length;i++){
      phoneNumbers.push(isExist[i].phone)
    }
    console.log(phoneNumbers);
    res.send({phone:phoneNumbers})
    }
    else{
      res.send({phone:[]})
  
    }
  } 

  exports.delete=async(req,res)=>{
    const id= req.body;
    const sf= req.query;
    const del= await contact.remove({_id:sf.id})
      res.send({
        isSuccess:true,
        messege:"CONTACT DELETED SUCCESSFULLY"
      })
  }

  exports.editContact= async (req, res) => {
    const td= req.params.id;
    const result = await contact.findOne({ _id: td })
    if (result) {
        res.send(result)
    }
    else {
        res.send("No record found")
    }
  }

  exports.updateContact=async (req, res) => {
    const result = await contact.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send({
      isSuccess:true,
      messege:"CONTACT UPDATED SUCCESSFULLY",
      result
    })
  }