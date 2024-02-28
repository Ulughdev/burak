import express from "express";
import path from "path";
import router from "./router";
/* 1- Entrence*/
const app = express();
//console.log("__dirname :", __dirname)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());




/* 2- Sessions*/

/* 3- Views*/
app.set("viwe", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


/* 4- Routers*/
app.use("/", router); // Middilewere Design Pattern

export default app;   // module.exports = app