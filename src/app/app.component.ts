// import { resolve } from 'dns';
import {NetWeightService} from './services/net-weight.service';
import {Component, OnInit} from '@angular/core';
import {NetWeightData} from './data.model';
import {PrimeNGConfig} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
import {TooltipModule} from 'primeng/tooltip';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  public editItem = true;

  public toolEnable: boolean[] = [true, true, true, true, true, true, true];

  public toolInvalid: boolean[] = [false, false, false, false, false, false, false];

  public data: NetWeightData = null;

  public saveBtn = false;


  constructor(private netWeightService: NetWeightService) {}


  editMode(): void {
    this.editItem = !this.editItem;
  }

  saveVal(): void {
        for ( let i = 0; i < this.data.netWeightValues.length; i++) {
          this.data.netWeightValues.splice(i, 1, this.data.netWeightValues[i]);
          if (this.data.netWeightValues[i] !== null) {
            console.log('Размер' + ' ' + this.data.header[i] + ' ' + 'вес' + ' ' + this.data.netWeightValues[i]);
          }
        }
        this.netWeightService.saveData(this.data);
        console.log(this.data.netWeightValues);

  }


  checkVal(i): any {

    if (this.data.netWeightValues[i] < this.data.netWeightValues[i - 1]) {
        this.toolEnable.splice(i, 1, false);
        this.toolEnable.splice(i - 1, 1, false);
        this.toolInvalid.splice(i, 1, true);
        this.toolInvalid.splice(i - 1, 1, true);
        this.saveBtn = true;
      } else {
        this.toolEnable.splice(i - 1, 1, true);
        this.toolEnable.splice(i - 1, 1, true);
        this.toolInvalid.splice(i, 1, false);
        this.toolInvalid.splice(i - 1, 1, false);
        this.saveBtn = false;
      }
    // const a = this.data.netWeightValues.slice();
    const a = [null, null, null, null, null, null];
    const b = Array.from(this.data.netWeightValues);

    console.log(a + 'AAAAAAA');
    console.log(b + 'BBBBBB');

    console.log(this.data.netWeightValues + '11111');
    console.log(this.saveBtn);


    if (JSON.stringify(this.data.netWeightValues) === JSON.stringify(b)) {
      this.saveBtn = true;
    } else {
      this.saveBtn = false;
    }
  }

  deleteVal(index): void {
    this.data.netWeightValues[index] = null;
  }


  ngOnInit(): void {
    this.netWeightService.data.subscribe(data => {
      this.data = data;
    });
    this.netWeightService.getData();
  }
}
