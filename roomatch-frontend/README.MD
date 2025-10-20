# Roomatch Frontend

Projeto frontend para a aplicação Roomatch, uma plataforma para encontrar o colega de quarto ideal. Desenvolvido utilizando apenas HTML, CSS e JavaScript puro, com manipulação direta do DOM para criar uma experiência de Single Page Application (SPA).

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Para a estrutura semântica das páginas.
-   **CSS3:** Para estilização e design responsivo.
-   **JavaScript (ES6+):** Para toda a lógica da aplicação, manipulação do DOM e interatividade.

## 📂 Estrutura do Projeto

A estrutura de arquivos foi organizada para separar as responsabilidades e facilitar a manutenção:

```
/
|-- index.html          # Arquivo principal, ponto de entrada da aplicação
|-- src/
|---- pages/
|------ chat/
|-------- index.html
|-------- styles.css
|-------- script.js
|------ login/
|-------- index.html
|-------- styles.css
|-------- script.js
|------ RESTANTE DAS PAGINAS
|---- assets/            # Arquivo onde ser guardado todas as imagens e icones
|------ icon/
|------ images/
|---- index.html
|---- app.js             # Arquivo de entrada, utilizado para roteamento
```

-   **`index.html`**: É o único arquivo HTML servido. Ele contém um elemento principal (ex: `<div id="app"></div>`) onde o conteúdo das outras páginas é renderizado dinamicamente.
-   **`src/app.js`**: Responsável por gerenciar as rotas da aplicação.
-   **`src/pages/`**: Cada arquivo nesta pasta geralmente exporta uma função ou um objeto que retorna o conteúdo HTML (como uma string de template) e anexa os eventos específicos daquela página.

## 🧭 Roteamento (SPA)

A aplicação funciona como uma **Single Page Application (SPA)**, onde a navegação entre as páginas ocorre sem a necessidade de recarregar o `index.html`. O roteamento é implementado da seguinte forma:

1.  **Ponto de Entrada**: O `index.html` é carregado uma única vez.
2.  **Gerenciamento de Rotas**: O arquivo `src/app.js` mapeia as rotas da URL (ex: `/#/login`, `/#/profile`) para os componentes de página correspondentes localizados em `js/pages/`.
3.  **Manipulação do Histórico**: Utilizamos o evento `hashchange` do navegador para detectar quando a URL muda (ex: o usuário clica em um link `<a href="#/profile">`).
4.  **Renderização Dinâmica**: Quando uma mudança de rota é detectada, o roteador:
    -   Identifica qual página carregar com base no novo hash.
    -   Chama a função correspondente da página (ex: `loginPage()`).
    -   Esta função gera o HTML da página.
    -   O conteúdo gerado é inserido no elemento principal `<div id="app"></div>` do `index.html` usando `innerHTML` ou métodos de manipulação do DOM.

Este método permite uma transição rápida e fluida entre as páginas, simulando o comportamento de uma aplicação multi-página tradicional.

## ✨ Funcionalidades Implementadas

-   **Cadastro e Login de Usuários**: Formulários para entrada e registro na plataforma.
-   **Criação e Edição de Perfil**: O usuário pode adicionar suas informações pessoais, preferências de moradia e fotos.
-   **Visualização de Perfis**: Tela para visualizar os perfis de outros usuários compatíveis.
-   **Sistema de "Match"**: Funcionalidade para curtir ou descartar perfis, similar a aplicativos de relacionamento.
-   **Chat em Tempo Real (simulado)**: Interface de chat para comunicação entre usuários que deram "match".

## ⚙️ Como Executar

Como o projeto é construído com tecnologias web puras, não há necessidade de um processo de build complexo.

1.  Clone o repositório:
    ```bash
    git clone https://github.com/hugocbb/projeto-roomatch.git
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd projeto-roomatch/roomatch-frontend
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.

Para uma melhor experiência e para evitar problemas com políticas de CORS (ao carregar arquivos locais via `fetch`, por exemplo), é recomendado usar um servidor local. Uma maneira fácil é usar a extensão **Live Server** do VS Code.