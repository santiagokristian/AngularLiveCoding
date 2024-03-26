import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { PetDetail, statusType } from '../../model/status.model';
import { CommonModule } from '@angular/common';
import { DataPasserService } from '../../service/data-passer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-box.component.html',
  styleUrl: './status-box.component.scss',
})
export class StatusBoxComponent implements OnDestroy, OnInit {
  @Input() type: statusType = statusType.listed;
  data: Array<PetDetail> = [];
  detailSubscription: Subscription;
  ftbh = statusType.fbth;
  constructor(private dataPasser:DataPasserService) {
    
  }
  ngOnInit(): void {
    this.detailSubscription = this.dataPasser.animalData$.subscribe((data)=>{
      this.data = data;
    });
  }
  ngOnDestroy(): void {
    this.detailSubscription.unsubscribe();
  }
  moveToNextData(index: number) {
    let newStatus:PetDetail = this.data[index];
    switch(newStatus.status){
      case statusType.listed:newStatus.status = statusType.exam; break;
      case statusType.exam:newStatus.status = statusType.fbth; break;
      default:
        break;
    }
    this.data[index] = newStatus;
    this.dataPasser.updateAnimalData(this.data);
  }
}
