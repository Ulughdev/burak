import  {NextFunction, Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/types/Errors";

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
        console.log("body: ", req.body);
        const file = req.file;
        if(!file)
        throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

        const newMember: MemberInput = req.body; 
        newMember.memberImage = file?.path.replace(/\\/g, "/");
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);

         // TODO SESSIONS Authentication

         req.session.member = result;
         req.session.save(function(){
            res.redirect("/admin/product/all");
         });

    }catch (err) {
        console.log("ERROR, processSignup", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/signup')</script>`);
        //res.send(err);
    }
};

restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        console.log("req.body: ", req.body);
        const input: LoginInput = req.body;
        //res.send(" Signup Page");
        const result = await memberService.processLogin(input);

         // TODO SESSIONS Authentication

         req.session.member = result;
         req.session.save(function(){
            res.redirect("/admin/product/all");
         });
    }catch (err) {
        console.log("ERROR, processLogin", err);
        const message = err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login')</script>`);
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

restaurantController.getUsers = async (req: Request, res: Response) => {
    try {
        console.log("getUsers");
        const result = await memberService.getUsers();
        console.log("result: ", result)
        res.render("users", {users: result});
    }catch (err) {
        console.log("Error, getUsers", err);
        res.redirect("/admin/login");
    }
};

restaurantController.updateChosenUser = async(req: Request, res: Response) => {
    try {
        const result = await memberService.updateChosenUser(req.body);
       res.status(HttpCode.OK).json({data: result});
    }catch (err) {
        console.log("ERROR, Login", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);}
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

restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
    ) => {
        console.log("verifyRestaurant");
        if(req.session?.member?.memberType === MemberType.RESTAURANT){
            req.member = req.session.member;
            next();
        }else {
            const message = Message.NOT_AUTHENTICATED;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login')</script>`
        );
    }
}




export default restaurantController;