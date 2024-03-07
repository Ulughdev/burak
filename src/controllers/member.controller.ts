import  {Request, Response} from "express";
import {T} from "../libs/types/common";
import MemberService from "../models/member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/types/Errors";


const memberService = new MemberService();

// React

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("Signup");
        //console.log("body: ", req.body);

        const input: MemberInput = req.body,
           result: Member = await memberService.signup(input);
        
        // TODO    Tokens  Authentication
        
        res.json({member: result});
    }catch (err) {
        console.log("ERROR, signup", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({});
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("Login");
        const input: LoginInput = req.body,
           result = await memberService.login(input);

        // TODO    Tokens   Authentication
        res.json({member: result});
    }catch (err) {
        console.log("ERROR, Login", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({});
    }
};



export default memberController;
