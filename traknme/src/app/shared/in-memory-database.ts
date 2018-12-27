import { Points } from './points.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemPointsService implements InMemoryDbService {
  createDb() {
    let points: Points[] = [
        {
            "dateTime": "2017-10-10T21:34:15",
            "latitude": -23.962676666666667,
            "longitude": -46.3884785
        },
        {
            "dateTime": "2017-10-12T21:40:15",
            "latitude": -23.982676666666667,
            "longitude": -46.4084785
        }
    ];
    return {points};
  }
}

