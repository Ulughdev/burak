import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-Admin"
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/types/config";

import session from "express-session";
import ConnectMongoDB  from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",
});

/* 1- Entrence*/
const app = express();
//console.log("__dirname :", __dirname)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));




/* 2- Sessions*/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
  cookie: {
    maxAge: 1000 * 3600 * 6, // 6h
  },
  store: store,
  resave: true, // 10:30 auth => 13:30 har kirganizda yangilanadi
  saveUninitialized: true

    })
);

app.use(function(req, res, next) {
  const sessionInstance = req.session as T ;
  res.locals.member = sessionInstance.member;
  next();
})


/* 3- Views*/
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");


/* 4- Routers*/
app.use("/admin", routerAdmin)//BSSR: EJS
app.use("/", router); //SPA: React Middilewere Design Pattern


export default app;   // module.exports = app