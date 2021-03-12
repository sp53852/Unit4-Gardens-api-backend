require('dotenv').config();
const express = require('express');
const app = express();              //app is an object
const methodOverride = require("method-override");
const cors = require("cors");


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(methodOverride("_method"));

// app.get('/somedata', (req, res) => {
//     res.send('here is your information');
// });


app.use("/api/gardens", require("./controllers/gardensController.js"));

// app.listen(3000, ()=>{
//     console.log("I am listening");
// });

app.listen(process.env.PORT, () => {
    console.log("Server is listening!!!")
});