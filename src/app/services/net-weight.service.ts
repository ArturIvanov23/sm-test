import {NetWeightData} from '../data.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {DataService} from './data.service';

@Injectable()


export class NetWeightService {

  private data$: BehaviorSubject<NetWeightData> = new BehaviorSubject(null);

  public get data(): Observable<NetWeightData> {
    return this.data$.asObservable();
  }

  constructor(private dataService: DataService) {
  }

  public async getData(): Promise<void> {
    this.data$.next(await this.dataService.getData());
  }

  public async saveData(data: NetWeightData): Promise<void> {
    this.data$.next(await this.dataService.setData(data));
  }
}
