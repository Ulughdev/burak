import { Request, Response } from "express";
import Errors from "../libs/types/Errors";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

const productService = new ProductService();
const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log("getAllProducts");
        res.render("products");
        
        // TODO    Tokens   Authentication
    }catch (err) {
        console.log("ERROR, getAllProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({});
    }
};

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log("createNewProducts");
        
        // TODO    Tokens   Authentication
    }catch (err) {
        console.log("ERROR, createNewProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({});
    }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log("updateChosenProduct");
        
        // TODO    Tokens   Authentication
    }catch (err) {
        console.log("ERROR, updateChosenProducts", err);
        if(err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        //res.json({});
    }
};

export default productController;