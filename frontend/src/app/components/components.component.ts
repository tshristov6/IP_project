import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cooling, CPU, GPU, MOBO, PSU, RAM} from "../interfaces/component.interfaces";
@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})


export class ComponentsComponent {
  imageUrl: any;
  gpus: GPU[] = [];
  cpus: CPU[] = [];
  mobos: MOBO[] = [];
  psus: PSU[] = [];
  coolers: Cooling[] = [];
  rams: RAM[] = [];


  showGPU: boolean = false;
  showCPU: boolean = false;
  showMOBO: boolean = false;
  showPSU: boolean = false;
  showCooling: boolean = false;
  showRAM: boolean = false;


  constructor (private http: HttpClient) {};
  getGPU() {
    this.showGPU = !this.showGPU;
    this.showCPU = false;
    this.showMOBO = false;
    this.showPSU = false;
    this.showCooling = false;
    this.showRAM = false;

    this.http.get("http://localhost:420/component/video_cards")
    .subscribe((data: any) => {
      this.imageUrl = 'data:image/png;base64,' + data.pcs_pic;
    });

    this.http.get("http://localhost:420/component/video_cards")
    .subscribe((data:any) => {
      console.log({data})
      this.gpus = data

    });
  };

  getCPU() {
    this.showCPU = !this.showCPU;
    this.showMOBO = false;
    this.showPSU = false;
    this.showCooling = false;
    this.showRAM = false;
    this.showGPU = false;

    this.http.get("http://localhost:420/component/processor")
    .subscribe((data:any) => {
      console.log({data})
      this.cpus = data

    });
  };

  getMOBO() {
    this.showMOBO = !this.showMOBO;
    this.showPSU = false;
    this.showCooling = false;
    this.showRAM = false;
    this.showGPU = false;
    this.showCPU = false;

    this.http.get("http://localhost:420/component/motherboard")
    .subscribe((data:any) => {
      console.log({data})
      this.mobos = data

    });
  };

  getPSU() {
    this.showPSU = !this.showPSU;
    this.showCooling = false;
    this.showRAM = false;
    this.showGPU = false;
    this.showCPU = false;
    this.showMOBO = false;

    this.http.get("http://localhost:420/component/power_supply")
    .subscribe((data:any) => {
      console.log({data})
      this.psus = data

    });
  };

  getCooling() {
    this.showCooling = !this.showCooling;
    this.showRAM = false;
    this.showGPU = false;
    this.showCPU = false;
    this.showMOBO = false;
    this.showPSU = false;
    this.http.get("http://localhost:420/component/cooling")
    .subscribe((data:any) => {
      console.log({data})
      this.coolers = data

    });

  };
  getRAM() {
    this.showRAM = !this.showRAM;
    this.showGPU = false;
    this.showCPU = false;
    this.showMOBO = false;
    this.showPSU = false;
    this.showCooling = false;
    this.http.get("http://localhost:420/component/ram")
    .subscribe((data:any) => {
      console.log({data})
      this.rams = data

    });
  };
}
