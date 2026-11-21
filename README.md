# Nexo — proposta 6

Site institucional independente em português brasileiro, criado com Angular 22 e a skill **Impeccable**. A direção combina branco, tinta e magenta com tipografia editorial e uma trama vetorial autoral que representa frentes de tecnologia conectadas.

## Executar localmente

Requer Node 22.22.3+ ou 24.15+ compatível com Angular 22.

```bash
npm ci
npm start
```

Abrir **http://localhost:4206**.

```bash
npm run build
npm test -- --watch=false
```

## O que explorar

- Cinco frentes de serviço com detalhes, entregas possíveis e seleção para o briefing.
- Demonstração reversível de uma solicitação: fluxo manual e fluxo conectado. O conteúdo é ilustrativo, sem dados de clientes.
- Processo, pessoas, FAQ nativa e navegação móvel.
- Briefing local com validação, cópia e download de um arquivo de texto. Nenhum envio automático.

O canal externo permanece vazio em `src/app/ui/contact.config.ts`. Um e-mail real configurado ali habilita um link para o cliente de e-mail. Não há API, backend, cadastro, rastreadores ou envio simulado.

## Proveniência e decisões

- Contexto factual: [PRODUCT.md](PRODUCT.md), baseado no brainstorming fornecido pelo usuário. Nexo é nome provisório; não há cases, depoimentos, clientes, preços ou métricas inventadas.
- Workflow principal: `/home/codex/.codex/skills/impeccable/SKILL.md`, com `new-work`, `new-work-world`, `craft-floor` e `mode-persuade`; complemento de progressão narrativa em `sites/references/design/presentation-led.md`.
- O comando de contexto falhou na primeira execução por permissão de execução do launcher. Foi seguida sua alternativa de leitura direta, sem nova tentativa. A escolha visual foi delegada pelo usuário; não houve rodada de aprovação intermediária.
- Tipos locais: **Bricolage Grotesque** e **Manrope**, arquivos variáveis reais do repositório [google/fonts](https://github.com/google/fonts). Licenças OFL em `public/fonts`. Não dependem de requisição externa em tempo de execução.
- Trama de sinais, monogramas, favicon, marca e diagrama: SVG/CSS próprios. Não foram usadas fotografias, imagens geradas ou assets de clientes.
- Componentes de briefing e ícones vieram da infraestrutura compartilhada da proposta 1; o briefing foi retematizado e o conteúdo institucional foi substituído.

O sistema construído e a avaliação estão em [DESIGN.md](DESIGN.md). O contrato de direção e capturas de revisão ficam em `.impeccable/` e não integram os assets públicos.

## Verificação final

Build de produção aprovado: 327,18 kB iniciais (86,11 kB estimados em transferência). Cinco testes unitários aprovados. A revisão no navegador registrou cinco auditorias AXE sem violações; seleção de serviço, demonstração reversível e briefing com erro/validação, cópia, download e Escape funcionam. Sem overflow de 320 a 1024px nas seis larguras verificadas, erros de execução ou falhas de rede. Capturas comparativas e relatório estão na pasta `../previews`.

## Publicação no GitHub Pages

Endereço após a publicação: https://PauloAugustoJunior.github.io/site6/

1. No repositório `site6` no GitHub, abra **Settings → Pages** e selecione **GitHub Actions** em **Build and deployment → Source**. Essa configuração é feita uma única vez.
2. Envie os commits para `main`. No Windows, o arquivo `push-sites.cmd`, na pasta que contém os seis sites, faz os pushes em sequência.
3. Acompanhe a publicação na aba **Actions**, no workflow **Publicar no GitHub Pages**.

O arquivo [.github/workflows/pages.yml](.github/workflows/pages.yml) instala as dependências, gera o build de produção com a base correta e publica automaticamente a cada push em `main`. Não é necessário instalar GitHub CLI, criar token pessoal ou compilar no Windows. Também é possível iniciar uma publicação em **Actions → Publicar no GitHub Pages → Run workflow**.

No plano GitHub Free, o repositório precisa ser público para usar Pages. Referência: [documentação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
