import { NetWeightData } from '../data.model';



export class DataService {

  private data: NetWeightData = {
    netItemId: 1,
    header: ['40', '41', '42', '43', '44', '45'],
    netWeightValues: [null, null, null, null, null, null]
  };

  private getDataRequest(): Promise<NetWeightData> {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(this.data);
        }, 500);
      }
    );
  }

  public getData(): Promise<NetWeightData> {
    return this.getDataRequest();
  }

  public setData(data: NetWeightData): Promise<NetWeightData> {
    this.data = data;
    return this.getDataRequest();
  }
}
