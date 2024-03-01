import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/member.service";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        // logic
        //service model
        //......
        res.send(" Home Page");
        // send, json , redirect, end, render => response
    }catch (err) {
        console.log("ERROR, goHome", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send(" Login Page");
    }catch (err) {
        console.log("ERROR, getLogin", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send(" Signup Page");
    }catch (err) {
        console.log("ERROR, getSignup", err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        //res.send(" Signup Page");
        res.send("Done!");
    }catch (err) {
        console.log("ERROR, processLogin", err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        //res.send(" Signup Page");
        res.send("Done!");
    }catch (err) {
        console.log("ERROR, processSignup", err);
    }
};

export default restaurantController;