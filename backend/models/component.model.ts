import {DB} from "../database/db";

const db: any = new DB();
class ComponentModel {
    conn;
    constructor() {
        this.conn = db.conn;
    }
    async getAllCooling() {
        const [cooling] = await db.conn.query("SELECT pcs_name, pcs_cooling_type, pcs_brand, pcs_power_connector_type, pcs_quantity FROM pcs_cooling");
        return cooling;
    }
    async getAllMotherboards() {
        const [motherboards] = await db.conn.query("SELECT pcs_name, pcs_chpset, pcs_socets, pcs_ram_slots, pcs_quantity FROM pcs_motherboard");
        return motherboards;
    }
    async getAllPowerSupplies() {
        const [power] = await db.conn.query("SELECT pcs_name, pcs_connector_type, pcs_wattage, pcs_cooling_method, pcs_brand, pcs_quantity FROM pcs_powersupplies");
        return power;
    }
    async getAllProcessors() {
        const [processor] = await db.conn.query("SELECT pcs_name, pcs_cloack_speed, pcs_processor_num, pcs_cores, pcs_cpu_socket, pcs_quantity FROM pcs_processors");
        return processor;
    }
    async getAllRam() {
        const [ram] = await db.conn.query("SELECT pcs_name, pcs_capacity, pcs_cloack_speed, pcs_compatibility, pcs_quantity FROM pcs_ram");
        return ram;
    }
    async getAllStorage() {
        const [storage] = await db.conn.query("SELECT pcs_name, pcs_size, pcs_brand, pcs_type, pcs_quantity FROM pcs_storage");
        return storage;
    }
    async getAllVideoCards() {
        const [vc] = await db.conn.query("SELECT pcs_vc_name, pcs_gpu, pcs_clock_speed, pcs_memory_size, pcs_output_ports, pcs_quantity, pcs_img FROM pcs_videocards");
        return vc;
    }
}

export {ComponentModel}