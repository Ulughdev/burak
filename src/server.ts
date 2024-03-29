//import moment from 'moment'; // const moment = require('moment')
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
.connect(process.env.MONGO_URL as string)
.then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function(){
        console.log(`The server is running successfully on port: ${PORT}`);
        console.info(`Admin project on http://localhost:${PORT}/admin`);
    });
})
.catch((err) => console.log("EROR on connection MongoDB", err));