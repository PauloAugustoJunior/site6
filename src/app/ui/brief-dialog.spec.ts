import { TestBed } from '@angular/core/testing';
import { BriefDialog } from './brief-dialog';

describe('Briefing do projeto', () => {
  it('não gera briefing sem informações de contato e contexto', () => {
    const fixture = TestBed.createComponent(BriefDialog);
    const component = fixture.componentInstance;
    component.prepare();
    expect(component.ready()).toBe(false);
    expect(component.brief()).toBe('');
    expect(component.form.controls.email.touched).toBe(true);
  });
  it('rejeita nome e descrição preenchidos somente com espaços', () => {
    const component = TestBed.createComponent(BriefDialog).componentInstance;
    component.form.setValue({
      name: '    ',
      email: 'pessoa@empresa.com',
      company: '',
      service: 'Sites e landing pages',
      message: '                        ',
    });
    expect(component.form.invalid).toBe(true);
  });
  it('prepara um resumo sem simular um envio', async () => {
    const fixture = TestBed.createComponent(BriefDialog);
    await fixture.whenStable();
    const component = fixture.componentInstance;
    component.form.setValue({
      name: '  Ana Silva  ',
      email: 'ana@empresa.com',
      company: '  Estúdio  ',
      service: 'Sites e landing pages',
      message: 'Precisamos de um site para apresentar nossos serviços.',
    });
    component.prepare();
    await fixture.whenStable();
    expect(component.brief()).toContain('Nome: Ana Silva');
    expect(component.brief()).toContain('Empresa: Estúdio');
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Nenhum dado foi enviado');
    expect(element.querySelector('a[href^="mailto:"]')).toBeNull();
  });
});
