const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const homeRoute = require("./routes/homeRoute");
const profileRoute = require("./routes/profileRoute");
const surveyRoute = require("./routes/surveyRoute");
const contactRoute = require("./routes/contactRoute");



app.use(cors());
app.use(express.json());


app.use("/", homeRoute);
app.use("/", profileRoute);
app.use("/", contactRoute);
app.use("/", surveyRoute);





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});