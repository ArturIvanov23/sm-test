import {ConfirmationService} from 'primeng/api';
import {Component, Injectable, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';
import {NetWeightService} from '../services/net-weight.service';
import { NetWeightData } from '../data.model';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']

})

@Injectable()


export class DialogComponent {


  constructor(private confirmationService: ConfirmationService,
              private netWeightService: NetWeightService,
              private appComponent: AppComponent) {
  }

  public testov: NetWeightData = {
    netItemId: 1,
    header: [],
    netWeightValues: []
};

  public confirm(): void {
    const obj = Object.assign([], this.appComponent.data.netWeightValues);
    // this.appComponent.data.netWeightValues = obj;

    console.log(this.testov.netWeightValues + '' + 'obj');
    console.log(this.appComponent.data.netWeightValues);
    console.log(obj + 'ne obj');
    if (this.appComponent.data.netWeightValues === [null]) {
      this.appComponent.editItem = false;
    } else {
      this.confirmationService.confirm({
        message: 'Все несохраненные изменения будут потеряны! Вы уверены, что хотите отменить редактирование?',
        header: 'Внимание!',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.appComponent.editItem = true;
          for (let i = 0; i < this.appComponent.data.netWeightValues.length; i++) {
            this.appComponent.deleteVal(i);
          }
        },
        reject: () => {
          this.confirmationService.close();
        }
      });
    }
  }
}
