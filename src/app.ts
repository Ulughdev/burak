import express from "express";
import path from "path";

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

export default app;   // module.exports = app