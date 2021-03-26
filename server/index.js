const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const homeRoute = require("./routes/homeRoute");
const contactRoute = require("./routes/dashboardRoute");
const contactRoute = require("./routes/appointmentsdRoute");



app.use(cors());
app.use(express.json());

app.use("/", homeRoute);
app.use("/", dashboardRoute);
app.use("/", appointmentsRoute);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});