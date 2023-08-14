export interface GPU {
  pcs_name: string,
  pcs_gpu: string,
  pcs_clock_speed: string,
  pcs_memory_size: string,
  pcs_output_ports: string,
  pcs_quantity: number,
  pcs_pic: string,


}
export interface CPU {
  pcs_name: string,
  pcs_cloack_speed: string,
  pcs_processor_num: string,
  pcs_cores: string,
  pcs_cpu_socket: string,
  pcs_quantity: number,
  pcs_pic: string,

}
export interface MOBO {
  pcs_name: string,
  pcs_chpset: string,
  pcs_socets: string,
  pcs_ram_slots: string,
  pcs_quantity: string,
  pcs_pic: string


}
export interface PSU {
  pcs_name: string,
  pcs_connector_type: string,
  pcs_wattage: string,
  pcs_cooling_method: string,
  pcs_brand: string,
  pcs_quantity: number

}
export interface Cooling {
  pcs_name: string,
  pcs_cooling_type: string,
  pcs_brand: string,
  pcs_quantity: number,
  pcs_power_connector_type: string,

}
export interface RAM {
  pcs_name: string,
  pcs_capacity: string,
  pcs_cloack_speed: string,
  pcs_compatibility: string,
  pcs_quantity: number
}
