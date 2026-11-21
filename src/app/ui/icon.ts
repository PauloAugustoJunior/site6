import { Component, computed, input } from '@angular/core';

const paths: Record<string, string[]> = {
  asterisk: [
    'M12 2v20',
    'm3.34 7 17.32 10',
    'm3.34 17 17.32-10',
    'm7 3.34 10 17.32',
    'm17 3.34-10 17.32',
    'M2 12h20',
  ],
  code: ['m8 8-4 4 4 4', 'm16 8 4 4-4 4', 'm14 4-4 16'],
  spark: ['m12 3 2.8 6.2L21 12l-6.2 2.8L12 21l-2.8-6.2L3 12l6.2-2.8Z'],
  chart: ['M4 4v16h16', 'M8 15v-4', 'M12 15V7', 'M16 15V9'],
  globe: [
    'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    'M3 12h18',
    'M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z',
  ],
  flow: [
    'M8 6h8',
    'M6 8v8',
    'M18 8v8',
    'M8 18h8',
    'M4 4h4v4H4z',
    'M16 4h4v4h-4z',
    'M4 16h4v4H4z',
    'M16 16h4v4h-4z',
  ],
  layers: ['m12 3 10 5-10 5L2 8Z', 'm2 12 10 5 10-5', 'm2 16 10 5 10-5'],
  check: ['m5 12 4 4L19 6'],
  plus: ['M12 5v14', 'M5 12h14'],
  close: ['m6 6 12 12', 'M6 18 18 6'],
  menu: ['M4 7h16', 'M4 12h16', 'M4 17h16'],
  chevron: ['m6 9 6 6 6-6'],
  message: [
    'M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z',
    'M8 11h8',
    'M8 15h5',
  ],
  shield: ['m12 3 8 4v5c0 5-8 9-8 9s-8-4-8-9V7Z', 'm8 12 3 3 5-6'],
  clock: ['M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z', 'M12 7v5l3 2'],
  download: ['M12 3v12', 'm7 10 5 5 5-5', 'M4 16v5h16v-5'],
  copy: ['M8 8h12v12H8z', 'M16 8V4H4v12h4'],
  search: ['M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z', 'm15 15 6 6'],
  bolt: ['m13 2-9 12h7l-1 8 10-12h-7Z'],
  database: [
    'M20 6c0 2-4 3-8 3S4 8 4 6s4-3 8-3 8 1 8 3Z',
    'M4 6v12c0 2 4 3 8 3s8-1 8-3V6',
    'M4 12c0 2 4 3 8 3s8-1 8-3',
  ],
  phone: ['M7 2h10v20H7z', 'M11 18h2'],
};

@Component({
  selector: 'app-icon',
  template: `<svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    @for (path of lines(); track $index) {
      <path [attr.d]="path" />
    }
  </svg>`,
  styles: `
    :host {
      display: inline-flex;
      width: 1.5rem;
      height: 1.5rem;
      flex-shrink: 0;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class Icon {
  readonly name = input('spark');
  readonly lines = computed(() => paths[this.name()] ?? paths['spark']);
}
