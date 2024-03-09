import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/types/Errors";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        // logic
        //service model
        //......
        res.render("home"); // send, render, redirect, json
        // send, json , redirect, end, render => response
    }catch (err) {
        console.log("ERROR, goHome", err);
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    }catch (err) {
        console.log("ERROR, getSignup", err);
        res.redirect("/admin");
    }
};


restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    }catch (err) {
        console.log("ERROR, getLogin", err);
        res.redirect("/admin");
    }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        //console.log("body: ", req.body);

        const newMember: MemberInput = req.body; 
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

         // TODO SESSIONS Authentication

         req.session.member = result;
         req.session.save(function(){
            res.send(result);
         });

    }catch (err) {
        console.log("ERROR, processSignup", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert(hi "${message}"): window.location.replase('admin/signup')</script>`);
        //res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body: ", req.body);
        const input: LoginInput = req.body;
        //res.send(" Signup Page");
        const result = await memberService.processLogin(input);

         // TODO SESSIONS Authentication

         req.session.member = result;
         req.session.save(function(){
            res.send(result);
         });
    }catch (err) {
        console.log("ERROR, processLogin", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert(hi "${message}"): window.location.replase('admin/login')</script>`);
        //res.send(err);
    }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
    try {
        console.log("logout");
        console.log("body: ", req.body);
        req.session.destroy(function(){
            res.redirect("/admin")
        })
    }catch (err) {
        console.log("ERROR, logout", err);
        res.redirect("/admin");
    }
};


restaurantController.checkAuthSession = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");
        console.log("body: ", req.body);
        if(req.session?.member) 
        res.send(`<script> alert(hi "${req.session.member.memberNick}")</script>`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`);
    }catch (err) {
        console.log("ERROR, processLogin", err);
        res.send(err);
    }
};




export default restaurantController;