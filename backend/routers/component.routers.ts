import {Router} from "express";
import * as component from "../controllers/component.controller";

const componentRouters = Router();

componentRouters.get("/component/cooling", component.getCooling);
componentRouters.get("/component/motherboard", component.getMotherboard);
componentRouters.get("/component/power_supply", component.getPower);
componentRouters.get("/component/processor", component.getProcessor);
componentRouters.get("/component/ram", component.getRam);
componentRouters.get("/component/storage", component.getStorage);
componentRouters.get("/component/video_cards", component.getVideo);

export {
    componentRouters
}