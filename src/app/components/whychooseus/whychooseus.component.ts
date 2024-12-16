import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-whychooseus',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './whychooseus.component.html',
  styleUrls: ['./whychooseus.component.css'],
})
export class WhychooseusComponent {
  applyForm: FormGroup;
  isSubmitting = false;

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
        [Validators.required, Validators.pattern('^\\+?[1-9][0-9]{7,14}$')], // Pattern for phone number
      ],
      currentSchool: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.applyForm.valid) {
      this.isSubmitting = true;

      const formData = this.applyForm.value;

      // Prepare data for the email
      const emailParams = {
        childFirstName: formData.childFirstName,
        childLastName: formData.childLastName,
        nationality: formData.nationality,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email,
        phone: formData.phone,
        currentSchool: formData.currentSchool,
        message: formData.message,
      };

      // Use EmailJS to send the email
      emailjs
        .send(
          environment.emailjs.serviceId, // Your serviceId from environment
          environment.emailjs.templateId, // Your templateId from environment
          emailParams, // Data you want to send
          environment.emailjs.userId // Your userId from environment
        )
        .then(
          (response: any) => {
            console.log('Application submitted successfully', response);
            alert('Your application has been submitted successfully!');
            this.applyForm.reset();
            this.isSubmitting = false;
          },
          (error: any) => {
            console.error('Error submitting application', error);
            alert(
              'There was an error submitting your application. Please try again.'
            );
            this.isSubmitting = false;
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }
}
