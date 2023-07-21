"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);
    if (!token)
        return res.status(401).send("ACCESS_DENIED");
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'appinventiv');
        console.log(decoded);
        req.body.id = decoded.id;
        next();
    }
    catch (err) {
        res.status(400).send("INVALID_TOKEN");
    }
}
exports.default = auth;
