const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const initialiseConnection = require("./database/db");
const PORT  = process.env.PORT;
const routes = require("./routes/productRoutes");
initialiseConnection();
app.use(cors());
app.use(express.json());

app.use("/product",routes);


app.listen(PORT,() =>{
    console.log(`app is listening on the port ${PORT}`);
})