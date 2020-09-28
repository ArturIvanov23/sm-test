import { NetWeightData } from '../data.model';
// import { resolve } from 'dns';
import { bindCallback, Observable } from 'rxjs';



export class DataService {

private data: NetWeightData = {
  netItemId: 1,
  header: ['40', '41', '42', '43', '44', '45', '46'],
  netWeightValues: []
};

public getData(): Promise<NetWeightData> {
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(this.data);
      }, 500);
    }
  );
}
}
