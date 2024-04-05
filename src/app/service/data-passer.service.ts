import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { PetDetail } from '../model/status.model';

@Injectable({
  providedIn: 'root'
})
export class DataPasserService {
  private animalDataSource = new Subject<Array<PetDetail>>();
  animalData$ = this.animalDataSource.asObservable();
  updateAnimalData(data: Array<PetDetail>) {
    this.animalDataSource.next(data);
  }
}
