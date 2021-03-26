const express = require("express");
const dataList = require("../data/bigData.json");
const router = express.Router();
const fs = require("fs");



router.get("/contact", (req, res) => {
        res.status(200).json(dataList);
  });


  router.get("/contact/:contactId", (req, res) => {
    let targetcontactId = req.params.contactId;
    let contact = contactList.find(item => {
    return targetcontactId === item.id;
    });
    if(contact){
        res.status(200).json(contact);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})


module.exports = router;

