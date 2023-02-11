import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMoment } from 'src/app/interfaces/IMoment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<IMoment>()
  @Input() btnText!: string;

  momentForm!: FormGroup;

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    })
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }

  handleSubmit(): void {
    if (this.momentForm.invalid) return;
    this.onSubmit.emit(this.momentForm.value);
  }
}
