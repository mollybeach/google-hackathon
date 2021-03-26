const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const homeRoute = require("./routes/homeRoute");
const patha = require("./routes/pathARoute");
const pathb = require("./routes/pathBRoute");
const contactRoute = require("./routes/dashboardRoute");
const contactRoute = require("./routes/appointmentsdRoute");



app.use(cors());
app.use(express.json());

app.use("/", homeRoute);
app.use("/", dashboardRoute);
app.use("/", appointmentsRoute);
app.use("/", pathARoute);
app.use("/", pathBRoute);




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});