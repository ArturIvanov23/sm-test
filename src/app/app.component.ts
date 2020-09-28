// import { resolve } from 'dns';
import { NetWeightService } from './services/net-weight.service';
import { Component, OnInit } from '@angular/core';
import { NetWeightData } from './data.model';
import { PrimeNGConfig } from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent implements OnInit {

  public editItem = true;

  public toolEnable: boolean[] = [];

  public data: NetWeightData = null;

  public testArr: number[] = [];

  public saveBtn = true;


  constructor(private netWeightService: NetWeightService){}


  editMode(): void {
    this.editItem = !this.editItem;
  }

  saveVal(): void {
    for (let i = 0; i < this.data.header.length; i++ ) {
      if (this.testArr[i] !== this.data.netWeightValues[i]) {
        this.data.netWeightValues.splice(i, 1, this.testArr[i]);
        console.log('Размер' + ' ' + this.data.header[i] + ' ' + 'вес' + ' ' + this.data.netWeightValues[i]);
      }
    }
  }


  checkVal(): void {
    for (let i = 0; i < this.testArr.length; i++) {
      this.toolEnable.push(this.testArr[i] < this.testArr[i + 1]);
    }
  }

  deleteVal(val): void {
    const index = this.testArr[val] - 1;
    this.testArr.splice(index, 1);
  }


    ngOnInit(): void {
      this.netWeightService.data.subscribe(data => {
        this.data = data;
        console.log(data);
      });
      this.netWeightService.getData();
  }
}
