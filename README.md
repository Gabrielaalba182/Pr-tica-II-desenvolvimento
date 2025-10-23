# instituto-esperanca

Projeto: Interface responsiva e acessível para o *Instituto Esperança*.
Entrega preparada para GitHub Pages.

## Estrutura do projeto

```
instituto-esperanca/
│
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   └── favicon.svg
└── README.md
```

## Como usar localmente

1. Clone o repositório:
```bash
git clone https://github.com/{seu-usuario-github}/instituto-esperanca.git
cd instituto-esperanca
```

2. Abrir `index.html` no navegador (duplo clique) ou usar um servidor local (recomendado):
```bash
# Python 3
python -m http.server 8000
# então abra http://localhost:8000
```

## Deploy no GitHub Pages

1. Crie o repositório no GitHub com o nome `instituto-esperanca` (ou use o nome escolhido).
2. Faça push do código para o repositório.
3. No GitHub, vá em **Settings → Pages** e selecione a branch (`main` ou `master`) e a pasta `/ (root)` como origem.
4. Salve. O site ficará disponível em `https://{seu-usuario-github}.github.io/instituto-esperanca` após alguns minutos.

> Observação: substitua `{seu-usuario-github}` pelo seu usuário GitHub real.

## Funcionalidades adicionadas

- Design system com variables CSS (paleta com >= 8 cores).
- Tipografia hierárquica (>=5 tamanhos).
- Sistema de espaçamento modular (8px, 16px, 24px, 32px, 48px, 64px).
- Grid principal com 12 colunas e 5 breakpoints responsivos.
- Navegação responsiva com dropdown e menu hambúrguer.
- Componentes: cards, botões com estados, formulários com validação visual, alerts, toasts e modal.
- Máscara para CPF e validação básica de formulário (JS).
- Animações suaves via CSS + reveal-on-scroll.

## Observações

- O script `js/main.js` contém comportamentos de UI (toasts, máscara CPF, validações básicas).
- Caso queira que eu gere o commit inicial e o `git` commands prontos, eu posso incluir um script de `git`/instruções passo-a-passo.

---
