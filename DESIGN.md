---
name: Nexo — proposta 6
description: Trama de sinais em branco, tinta e magenta
colors:
  cyclamen: "#bd0062"
  ink: "#202020"
  paper: "#ffffff"
  soft: "#f4f2f3"
  muted: "#65615f"
  line: "#ddd8db"
typography:
  display:
    fontFamily: "Bricolage, Arial, sans-serif"
    fontSize: "clamp(3.8rem, 7.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage, Arial, sans-serif"
    fontSize: "clamp(2.35rem, 4.2vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  control: "0px"
spacing:
  mobile-gutter: "20px"
  desktop-gutter: "64px"
  section-mobile: "64px"
  section-desktop: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "16px 24px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.cyclamen}"
    textColor: "{colors.paper}"
  service-surface:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.ink}"
    padding: "36px 40px 28px"
---

# Sistema visual — Nexo, proposta 6

## Overview

**Creative North Star: “Trama de sinais”.** Informações e processos que percorriam caminhos separados encontram uma construção digital. A direção é editorial, clara e expressiva, com geometria precisa. O artefato principal é uma trama vetorial autoral.

A cena de uso é a leitura durante o trabalho em ambiente iluminado. O branco favorece o texto e os detalhes da trama; a região magenta dá corpo ao exemplo interativo. O sistema foi concebido para contrastar com as outras cinco propostas. O modo **Persuade** e a estratégia da página estão em `.impeccable/surfaces/home.md`.

## Colors

Magenta ciclamen `#bd0062` é a cor de ação e ocupa o exemplo inteiro, além do título e da trama. Tinta `#202020` estrutura a leitura. Branco `#ffffff` mantém o fundo preciso; apoio `#f4f2f3` distingue o serviço explorado e o time. Texto secundário usa `#65615f`; divisórias usam `#ddd8db`.

Sobre o campo magenta, textos secundários derivam da mesma família cromática. No exemplo conectado, destinos ficam brancos e a tinta assume tom vinho.

## Typography

**Bricolage Grotesque**, variável e local, dá massa aos títulos e caráter às letras da marca. Sua construção larga e curvas particulares evitam depender de uma face condensada. **Manrope**, variável e local, mantém descrição, interface e dados legíveis.

Display até 96px, entrelinha 1.02 e tracking mínimo de -0.04em. Títulos de seção até 60px, entrelinha 1.08. Corpo principal de 16px; UI comum de pelo menos 14px; informações secundárias de pelo menos 12px. Fontes e licenças OFL em `public/fonts`, sem requisição externa em tempo de execução.

## Layout

Conteúdo até 1280px, margens desktop de 64px e mobile de 20px ou 16px na menor largura. Seções usam 64 a 112px de respiro. O hero abre com duas linhas grandes e desloca a segunda; propósito e CTA ficam abaixo à esquerda, com a trama à direita. No mobile, o artefato fica abaixo do texto, inteiro dentro da largura disponível.

Índice e detalhe de serviço ocupam colunas diferentes, sem grade de cartões. O exemplo magenta alterna densidade; processo e FAQ recuperam silêncio. O time ocupa uma superfície ampla, com dois perfis.

Breakpoints observados: 1100, 850, 620 e 359px. A navegação vira menu no mobile; o processo muda de quatro para duas colunas; serviços viram controles compactos sobre uma única superfície.

## Elevation & Depth

A página usa contraste de superfície e divisórias, sem sombras de cartões. Sombras existem somente na interrupção do diálogo e na navegação móvel aberta: `0 32px 100px #0003` e `0 18px 26px #2010180d`. O backdrop escurece o documento para proteger o foco do briefing.

## Shapes

Controles e superfícies são retangulares. A exceção são conexões, marca e elementos circulares de diagramas. A trama usa trajetórias Bézier precisas, sem simular fotografia ou material físico. Os monogramas identificam pessoas sem inventar retratos.

## Components

**Botões:** sólidos, texto branco, ícone de adição e hover magenta. Foco tem contorno de 3px e offset de 5px; sobre o magenta, o contorno é branco.

**Explorador:** cinco botões `aria-pressed` alteram objetivo, descrição e entregas. A ação do detalhe abre o briefing com o serviço selecionado. A superfície usa preenchimento suave, sem sombra.

**Demonstração:** um controle reversível converte repasse manual em fluxo conectado. Linhas tracejadas se tornam contínuas e destinos ficam brancos. O texto explicita que é um exemplo sem dados reais. Fundo e texto mudam juntos, sem interpolar contraste; somente o traço da conexão mantém transição. Não há timer, autoplay ou métricas fictícias.

**FAQ:** `details/summary` nativos; a adição rotaciona ao abrir. **Briefing:** diálogo nativo com foco protegido, campos rotulados, validação, resumo, edição, cópia e download. Nenhum envio automático. O canal externo permanece vazio em `contact.config.ts`.

**Movimento e superfícies do navegador:** uma transformação narrativa no exemplo, acionada pelo visitante. Sem entradas em cascata. `prefers-reduced-motion` reduz transições e rolagem suave. Seleção, caret, scrollbar e foco seguem a paleta.

## Do's and Don'ts

- **Do** usar as fontes locais, divisórias e contrastes amplos para hierarquia.
- **Do** identificar demonstrações e preservar a honestidade sobre o briefing local.
- **Do** conservar o mesmo vocabulário de conexões em diagramas e ações.
- **Don't** acrescentar cases, métricas, depoimentos, preços ou provas sociais sem fonte real.
- **Don't** transformar a composição em grade de cartões ou adicionar movimentos contínuos.

**Autocrítica:** a trama cria identidade e a demonstração explica uma combinação realista de serviços. A limitação é factual: sem projetos reais e canal externo configurado, o exemplo explica possibilidades e o briefing termina em arquivo/cópia. Trabalhos autorizados poderão enriquecer a prova no futuro. Build de produção aprovado (327,18 kB iniciais) e cinco testes unitários aprovados. As capturas desktop, completa e mobile foram inspecionadas. A verificação do agente principal registrou cinco auditorias AXE sem violações, fluxo de briefing válido/inválido, cópia, download, Escape, seleção de serviço e demonstração reversível aprovados. Não houve overflow em 320, 360, 390, 640, 768 ou 1024px, erros de execução, avisos, falhas de rede ou âncoras quebradas. O launcher da skill falhou por permissão e foi aplicada sua alternativa direta; documentação manual e revisão do agente principal substituem os agentes específicos da skill, sem abrir novos subagentes.
