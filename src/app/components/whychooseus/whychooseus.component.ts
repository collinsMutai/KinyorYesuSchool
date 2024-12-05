import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-whychooseus',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './whychooseus.component.html',
  styleUrls: ['./whychooseus.component.css'],
})
export class WhychooseusComponent {
  applyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      childFirstName: ['', [Validators.required]],
      childLastName: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^\\+?[1-9][0-9]{7,14}$')],
      ], // Pattern for phone number
      currentSchool: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.applyForm.valid) {
      console.log(this.applyForm.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
