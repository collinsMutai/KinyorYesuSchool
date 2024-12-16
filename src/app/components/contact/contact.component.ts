import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(\+?\d{1,3}[- ]?)?\(?\d{1,4}?\)?[- ]?\d{1,4}[- ]?\d{1,4}[- ]?\d{1,4}$/
        ),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  // Method to submit the form
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;

      const formData = this.contactForm.value;

      // Use EmailJS to send the email
      const emailParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      emailjs
        .send(
          environment.emailjs.serviceId, // Use serviceId from environment
          environment.emailjs.templateId, // Use templateId from environment
          emailParams, // Form data
          environment.emailjs.userId
        )
        .then(
          (response: any) => {
            console.log('Email sent successfully', response);
            alert('Message sent successfully!');
            this.contactForm.reset();
            this.isSubmitting = false;
          },
          (error: any) => {
            console.log('Error sending email', error);
            alert('Error sending message. Please try again.');
            this.isSubmitting = false;
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }
}
