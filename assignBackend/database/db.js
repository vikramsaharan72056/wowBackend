const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = "mongodb+srv://root:root@cluster0.brmgqnv.mongodb.net/assignEcom"

const initialiseConnection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
    }
};

module.exports = initialiseConnection;
