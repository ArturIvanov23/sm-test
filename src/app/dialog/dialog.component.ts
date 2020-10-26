import {ConfirmationService} from 'primeng/api';
import {Component, Injectable} from '@angular/core';
import {AppComponent} from '../app.component';
import {NetWeightService} from '../services/net-weight.service';


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

  public confirm(): void {
    if (this.appComponent.values.every(obj => obj.val === null)) {
      this.appComponent.editItem = true;
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
