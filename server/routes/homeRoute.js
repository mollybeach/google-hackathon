const express = require("express");
const dataList = require("../data/bigData.json");
const router = express.Router();
const fs = require("fs");



router.get("/home", (req, res) => {
        res.status(200).json(dataList);
  });


  router.get("/home/:homeId", (req, res) => {
    let targethomeId = req.params.homeId;
    let home = homeList.find(item => {
    return targethomeId === item.id;
    });
    if(home){
        res.status(200).json(home);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})

module.exports = router;

