import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PetDetail, statusType } from './model/status.model';
import { StatusBoxComponent } from './components/status-box/status-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, StatusBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularLiveCoding';
  form: FormGroup = new FormGroup({ name: new FormControl('') });
  listed = statusType.listed;
  exam = statusType.exam;
  fbth = statusType.fbth;
  constructor(private formBuilder: FormBuilder) {
  }
  animalDetails: PetDetail[] = [];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required,]]
    })
  }


  addToList() {
    const name = this.form.controls['name'].value;
    const petInfo = {
      id: this.animalDetails.length + 1,
      name: name,
      status: statusType.listed
    }
    this.animalDetails.push(petInfo);

  }
}
