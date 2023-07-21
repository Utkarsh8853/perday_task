"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("./src/routes/auth.route");
const post_route_1 = require("./src/routes/post.route");
const follow_info_route_1 = require("./src/routes/follow_info.route");
const actions_route_1 = require("./src/routes/actions.route");
const db_connection_1 = __importDefault(require("./src/database/db_connection"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 6000;
db_connection_1.default;
app.use("/auth", auth_route_1.authRouter);
app.use("/upload", post_route_1.postRouter);
app.use("/data", follow_info_route_1.followRouter);
app.use("/data", actions_route_1.actionRouter);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
