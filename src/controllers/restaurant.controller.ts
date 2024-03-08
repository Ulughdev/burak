import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        // logic
        //service model
        //......
        res.render("home");
        // send, json , redirect, end, render => response
    }catch (err) {
        console.log("ERROR, goHome", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    }catch (err) {
        console.log("ERROR, getSignup", err);
    }
};


restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    }catch (err) {
        console.log("ERROR, getLogin", err);
    }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        //console.log("body: ", req.body);

        const newMember: MemberInput = req.body; 
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

         // TODO SESSIONS Authentication

        res.send(result);
    }catch (err) {
        console.log("ERROR, processSignup", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body: ", req.body);
        const input: LoginInput = req.body;
        //res.send(" Signup Page");
        const result = await memberService.processLogin(input);

         // TODO SESSIONS Authentication

        res.send(result);
    }catch (err) {
        console.log("ERROR, processLogin", err);
        res.send(err);
    }
};



export default restaurantController;