import {Express, json} from "express";
import {componentRouters} from "./routers/component.routers";
import {commentRouters} from "./routers/comment.routers";

const cors = require("cors");
const express = require("express");
const server: Express = express();

server.use(json());
server.use(cors());
server.use(componentRouters);
server.use(commentRouters);

server.listen(420, () => {
    console.log("Your site is up and running.....Hopefully :)")
})
