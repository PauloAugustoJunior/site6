import { Component, ElementRef, computed, signal, viewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Icon } from './icon';
import { contactConfig } from './contact.config';

const trimmedLength =
  (length: number): ValidatorFn =>
  (control) =>
    typeof control.value === 'string' && control.value.trim().length >= length
      ? null
      : { trimmedLength: true };

@Component({
  selector: 'app-brief-dialog',
  imports: [ReactiveFormsModule, Icon],
  templateUrl: './brief-dialog.html',
  styleUrl: './brief-dialog.scss',
})
export class BriefDialog {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  readonly ready = signal(false);
  readonly copied = signal(false);
  readonly copyError = signal(false);
  readonly brief = signal('');
  readonly email = contactConfig.email;
  readonly mailLink = computed(
    () =>
      `mailto:${this.email}?subject=${encodeURIComponent('Vamos construir com a Nexo')}&body=${encodeURIComponent(this.brief())}`,
  );
  readonly form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, trimmedLength(2)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    company: new FormControl('', { nonNullable: true }),
    service: new FormControl('Ainda quero descobrir', { nonNullable: true }),
    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, trimmedLength(15)],
    }),
  });

  open(service = 'Ainda quero descobrir') {
    this.ready.set(false);
    this.copied.set(false);
    this.copyError.set(false);
    this.form.reset({ name: '', email: '', company: '', service, message: '' });
    this.dialog().nativeElement.showModal();
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.dialog().nativeElement.close();
    document.body.style.overflow = '';
  }

  cancel(event: Event) {
    event.preventDefault();
    this.close();
  }
  backdrop(event: MouseEvent) {
    if (event.target === this.dialog().nativeElement) this.close();
  }

  prepare() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.dialog().nativeElement.querySelector<HTMLElement>('.ng-invalid:not(form)')?.focus();
      return;
    }
    const value = this.form.getRawValue();
    this.brief.set(
      `NOVO PROJETO — ${contactConfig.companyName}\n\nNome: ${value.name.trim()}\nE-mail: ${value.email.trim()}\nEmpresa: ${value.company.trim() || 'Não informada'}\nInteresse: ${value.service}\n\nO desafio:\n${value.message.trim()}\n`,
    );
    this.ready.set(true);
    setTimeout(() =>
      this.dialog().nativeElement.querySelector<HTMLElement>('.result-title')?.focus(),
    );
  }

  async copy() {
    try {
      await navigator.clipboard.writeText(this.brief());
      this.copied.set(true);
      this.copyError.set(false);
    } catch {
      this.copyError.set(true);
    }
  }

  download() {
    const url = URL.createObjectURL(new Blob([this.brief()], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'meu-projeto-nexo.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
