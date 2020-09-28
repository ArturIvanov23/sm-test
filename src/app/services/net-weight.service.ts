import { NetWeightData } from '../data.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()


export class NetWeightService {

    private dataS: BehaviorSubject<NetWeightData> = new BehaviorSubject(null);

    public get data(): Observable<NetWeightData> {
        return this.dataS.asObservable();
    }


    constructor(private dataService: DataService) {}
    public async getData(): Promise<void> {
        this.dataS.next(await this.dataService.getData());
    }
    // public deleteVal(): void {this.dataS.value.netWeightValues.);
    // }
}
