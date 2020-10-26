// import { resolve } from 'dns';
import {NetWeightService} from './services/net-weight.service';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NetWeightData} from './data.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AppComponent implements OnInit {

  public editItem = true;
  public toolEnable: boolean[] = [true, true, true, true, true, true, true];
  public toolInvalid: boolean[] = [false, false, false, false, false, false, false];
  public data: NetWeightData = null;
  public firstData: NetWeightData = null;
  values: { val: number }[] = null;
  firstValues: {  val: number }[] = null;
  public saveBtn = false;

  constructor(private netWeightService: NetWeightService) {}

  editMode(): void {
    this.editItem = !this.editItem;
  }
  saveVal(): void {
        for ( let i = 0; i < this.data.netWeightValues.length; i++) {
          this.data.netWeightValues.splice(i, 1, this.values[i].val);
          if (this.values[i].val !== this.firstValues[i].val) {
            console.log('Размер' + ' ' + this.data.header[i] + ' ' + 'введенный вес' + ' ' + this.data.netWeightValues[i]);
            console.log(this.data.netWeightValues);
          }
        }
        this.netWeightService.saveData(this.data).then();
  }
  deleteVal(i): void {
    this.values[i].val = null;
  }
  checkVal(val: number, i): void {
    this.values[i].val = val;
    if ((this.values[i - 1] && this.values[i]) && (this.values[i - 1].val >= this.values[i].val)) {
      this.toolEnable.splice(i, 1, false);
      this.toolEnable.splice(i - 1, 1, false);
      this.toolInvalid.splice(i, 1, true);
      this.toolInvalid.splice(i - 1, 1, true);
      this.saveBtn = true;
    } else {
      this.saveBtn = false;
    }
  }
  ngOnInit(): void {
    this.netWeightService.data.subscribe(data => {
      if (data) {
        this.data = data;
        this.firstData = Object.assign({}, data);
        this.values = this.data.netWeightValues.map(item => ({ val: item }));
        this.firstValues = this.firstData.netWeightValues.map(item => ({ val: item }));
      }
    });
    this.netWeightService.getData().then();
  }
}
