import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PetDetail, statusType } from '../../model/status.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-box.component.html',
  styleUrl: './status-box.component.scss'
})
export class StatusBoxComponent implements OnChanges {
  @Input() type: statusType = statusType.listed;
  @Input() data: Array<PetDetail> = [];
  ftbh = statusType.fbth;
  constructor() {

  }

  moveToNextData(id: number) {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.type);
    console.log(this.data);
  }
}
