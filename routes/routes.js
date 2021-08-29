const express = require('express');
const router = express.Router();
const detailsSchemaCopy = require("../models/detailsmodel");
const path = require('path');
router.post("/details",async (request, response) => {
  
 const received = new detailsSchemaCopy ({
    name: request.body.name,
    email: request.body.email
  });
  await  received.save().then(() => response.send("Thank you very much. Your details have been received. We will send you an email as soon as we launch. ").status(200)).catch(err => response.send("It seems we took the wrong exit here. Let's try again").status(404));
  console.log(received);
});


router.get("/get", (req,res) => {
  detailsSchemaCopy.find({}, (err,result) => {
    if(err){
      console.log(err);
    }
    res.send(result);
    
  });
})


module.exports = router;