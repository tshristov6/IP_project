import {Request, Response} from "express";
import {ComponentModel} from "../models/component.model";

const componentModel = new ComponentModel();
const getCooling = async (req: Request, res: Response) => {
    const component = await componentModel.getAllCooling();
    res.send(component);
}
const getMotherboard = async (req: Request, res: Response) => {
    const component = await componentModel.getAllMotherboards();
    res.send(component);
}
const getPower = async (req: Request, res: Response) => {
    const component = await componentModel.getAllPowerSupplies();
    res.send(component);
}
const getProcessor = async (req: Request, res: Response) => {
    const component = await componentModel.getAllProcessors()
    res.send(component)
}
const getRam = async (req: Request, res: Response) => {
    const component = await componentModel.getAllRam()
    res.send(component)
}
const getStorage = async (req: Request, res: Response) => {
    const component = await componentModel.getAllStorage()
    res.send(component)
}
const getVideo = async (req: Request, res: Response) => {
    const component = await componentModel.getAllVideoCards()
    res.send(component)
}

export {
    getCooling, getMotherboard, getPower, getProcessor, getRam, getStorage, getVideo
}