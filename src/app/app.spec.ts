import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('Exploração Nexo', () => {
  it('apresenta o serviço escolhido sem abrir o briefing', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const choices = element.querySelectorAll<HTMLButtonElement>('.service-options button');
    choices[2].click();
    await fixture.whenStable();
    expect(element.querySelector('#service-detail h3')?.textContent).toContain('Informação espalhada');
    expect(element.querySelector('#service-detail')?.textContent).toContain('Dashboards de Business Intelligence');
    expect(choices[2].getAttribute('aria-pressed')).toBe('true');
    expect(choices[0].getAttribute('aria-pressed')).toBe('false');
    expect(element.querySelector('dialog')?.open).toBe(false);
  });

  it('permite comparar e restaurar o fluxo demonstrativo', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const toggle = element.querySelector<HTMLButtonElement>('.demo-switch');
    expect(element.querySelector('.demo-destinations')?.textContent).toContain('copia os dados');
    toggle?.click();
    await fixture.whenStable();
    expect(toggle?.getAttribute('aria-pressed')).toBe('true');
    expect(element.querySelector('.demo-destinations')?.textContent).toContain('Informações organizadas');
    expect(element.querySelector('.demo-label')?.textContent).toContain('sem dados reais');
    toggle?.click();
    await fixture.whenStable();
    expect(toggle?.getAttribute('aria-pressed')).toBe('false');
    expect(element.querySelector('.demo-destinations')?.textContent).toContain('copia os dados');
  });
});
