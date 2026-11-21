import { Component, computed, signal, viewChild } from '@angular/core';
import { BriefDialog } from './ui/brief-dialog';
import { Icon } from './ui/icon';

@Component({
  selector: 'app-root',
  imports: [BriefDialog, Icon],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class App {
  readonly menuOpen = signal(false);
  readonly selectedService = signal(0);
  readonly connected = signal(false);
  readonly dialog = viewChild.required(BriefDialog);
  readonly year = new Date().getFullYear();
  readonly services = [
    {
      name: 'Sites & páginas',
      title: 'O primeiro encontro com a sua empresa.',
      description: 'Sites institucionais e landing pages que apresentam o que você faz, organizam sua mensagem e facilitam o contato em qualquer tela.',
      deliverables: ['Estrutura e interface', 'Desenvolvimento responsivo', 'Formulários e integrações definidas no escopo'],
      cue: 'Para apresentar, lançar ou reposicionar.',
      service: 'Sites e landing pages',
      icon: 'globe',
      input: 'Sua marca',
      output: 'Presença digital',
    },
    {
      name: 'Software & apps',
      title: 'O seu processo merece um sistema que o entenda.',
      description: 'Aplicativos, portais e sistemas sob medida para organizar uma operação ou dar forma a um novo produto digital.',
      deliverables: ['Mapeamento de funcionalidades', 'Interfaces e desenvolvimento', 'APIs e regras do seu negócio'],
      cue: 'Para quando a ferramenta pronta não encaixa.',
      service: 'Software e aplicativos',
      icon: 'code',
      input: 'Seu processo',
      output: 'Software sob medida',
    },
    {
      name: 'Dados & BI',
      title: 'Informação espalhada. Uma visão que faz sentido.',
      description: 'Conectamos fontes e organizamos dados para construir análises, indicadores e dashboards úteis à sua rotina de decisão.',
      deliverables: ['Preparação e engenharia de dados', 'Indicadores e análises', 'Dashboards de Business Intelligence'],
      cue: 'Para olhar a operação com mais clareza.',
      service: 'Dados e Business Intelligence',
      icon: 'chart',
      input: 'Suas informações',
      output: 'Decisões com contexto',
    },
    {
      name: 'IA & chatbots',
      title: 'Inteligência aplicada a uma tarefa real.',
      description: 'Assistentes e chatbots para apoiar atendimento, consultar informações e lidar com tarefas específicas, com limites e revisão definidos no projeto.',
      deliverables: ['Definição do caso de uso', 'Assistentes e chatbots', 'Integração com informações do negócio'],
      cue: 'Para apoiar pessoas, com propósito e critério.',
      service: 'IA e chatbots',
      icon: 'message',
      input: 'Uma pergunta',
      output: 'Apoio com contexto',
    },
    {
      name: 'Automações & APIs',
      title: 'Menos copiar e colar entre um sistema e outro.',
      description: 'Integrações e fluxos automáticos para conectar ferramentas, transportar informações e reduzir etapas repetitivas de um processo.',
      deliverables: ['Mapeamento do fluxo', 'Integrações entre sistemas', 'Automações com regras e tratamento de falhas'],
      cue: 'Para fazer a informação seguir seu caminho.',
      service: 'Automações e integrações',
      icon: 'flow',
      input: 'Uma entrada',
      output: 'Sistemas conectados',
    },
  ];
  readonly currentService = computed(() => this.services[this.selectedService()]);
  readonly wires = Array.from({ length: 13 }, (_, index) => ({
    first: `M16 ${82 + index * 6} H100 C220 ${82 + index * 6} 160 ${292 - index * 4} 310 ${292 - index * 4} S430 ${94 + index * 6} 600 ${94 + index * 6}`,
    second: `M16 ${222 + index * 6} H96 C220 ${222 + index * 6} 194 ${44 + index * 5} 348 ${44 + index * 5} S470 ${248 + index * 4} 600 ${248 + index * 4}`,
  }));
  readonly faqs = [
    { question: 'Ainda não sei qual solução preciso. Por onde começo?', answer: 'Comece contando o que acontece hoje e o que gostaria de mudar. Pode ser uma tarefa repetitiva, uma informação difícil de encontrar ou uma ideia de produto. A escolha da tecnologia vem depois do entendimento do problema.' },
    { question: 'Preciso contratar todas as frentes?', answer: 'Não. Sites, software, dados, IA e automações podem ser contratados como projetos independentes. Eles também podem se conectar, quando isso fizer sentido para o seu negócio e para o escopo combinado.' },
    { question: 'Como vocês definem o valor e o prazo?', answer: 'A proposta considera o objetivo, as funcionalidades, as fontes de dados, as integrações e os critérios de entrega. Valor, prazo e condições são definidos depois desse levantamento, antes de começar o desenvolvimento.' },
    { question: 'O atendimento funciona para qualquer região?', answer: 'Sim. O trabalho é 100% remoto, para empresas de todo o Brasil. Alinhamentos, acompanhamento e validações são organizados à distância, com comunicação objetiva.' },
    { question: 'O que acontece quando eu preparo meu briefing?', answer: 'Você gera um resumo no próprio navegador e pode copiar ou baixar o arquivo. Seus dados não são enviados automaticamente. Este site ainda não possui um canal de contato externo configurado.' },
  ];

  start(service?: string) {
    this.menuOpen.set(false);
    this.dialog().open(service);
  }
}
