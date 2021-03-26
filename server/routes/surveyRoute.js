const express = require("express");
const dataList = require("../data/bigData.json");
const router = express.Router();
const fs = require("fs");



router.get("/survey/survey", (req, res) => {
        res.status(200).json(dataList);
  });


  router.get("/home/survery/:surveyId", (req, res) => {
    let targethomeId = req.params.surveyId;
    let home = homeList.find(item => {
    return targethomeId === item.id;
    });
    if(home){
        res.status(200).json(dataList);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})

module.exports = router;

