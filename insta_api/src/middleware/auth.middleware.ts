import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

export default function auth(req:any,res:Response,next:NextFunction){
    const token = req.headers.authorization;
    console.log(token);
    if(!token) return res.status(401).send("ACCESS_DENIED");
    try{
        const decoded :any = jwt.verify(token,'appinventiv');
        console.log(decoded);
        req.body.id= decoded.id;
        next();
    }catch(err:any){
        res.status(400).send("INVALID_TOKEN")
    }
}