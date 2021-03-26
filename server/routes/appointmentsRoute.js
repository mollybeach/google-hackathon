const express = require("express");
const dataList = require("../data/bigData.json");
const router = express.Router();
const fs = require("fs");



router.get("/appointments", (req, res) => {
        res.status(200).json(dataList);
  });


  router.get("/appointments/:appointmentsId", (req, res) => {
    let targetappointmentsId = req.params.appointmentsId;
    let appointments = appointmentsList.find(item => {
    return targetappointmentsId === item.id;
    });
    if(appointments){
        res.status(200).json(appointments);
    } else {
        res.status(400).send({ error: "Item does not exist" });
      }

})


module.exports = router;

