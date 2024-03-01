import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-Admin"
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/types/config";
/* 1- Entrence*/
const app = express();
//console.log("__dirname :", __dirname)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));




/* 2- Sessions*/

/* 3- Views*/
app.set("viwe", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


/* 4- Routers*/
app.use("/admin", routerAdmin)//BSSR: EJS
app.use("/", router); //SPA: React Middilewere Design Pattern


export default app;   // module.exports = app