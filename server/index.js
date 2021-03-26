const express = require('express');
const app = express();
const PORT = 8080;
const cors = require("cors");
const contactRoute = require("./routes/contactRoute");
const homeRoute = require("./routes/homeRoute");


app.use(cors());
app.use(express.json());

app.use("/", contactRoute);
app.use("/", homeRoute);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});