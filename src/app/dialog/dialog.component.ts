import {ConfirmationService} from 'primeng/api';
import {Component, Injectable} from '@angular/core';
import {AppComponent} from '../app.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']

})

@Injectable()


export class DialogComponent {


  constructor(private confirmationService: ConfirmationService,
              private appComponent: AppComponent) {}

  public confirm(): void {
    this.confirmationService.confirm({
      message: 'Все несохраненные изменения будут потеряны! Вы уверены, что хотите отменить редактирование?',
      header: 'Внимание!',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.appComponent.editItem = true;
      },
      reject: () => {
        this.confirmationService.close();
      }
    });
  }
}
