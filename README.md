Alunas: Ana Carla Conceição dos Santos; Camila Haiane dos Santos Pereira; Emily Marques da Cruz e Lays Luana Wimmer Zifirino.
Turma: 1022-A.

TEMA: LIVRARIA

Documentação:
Instruções para rodar o projeto localmente. (Lays Luana)
Descrição do TEMA escolhido pelo grupo. (Camila)
Das funcionalidades implementadas. (Emily)
Diagrama básico mostrando o fluxo de dados entre front-end e back-end. (Ana Carla)
Funcionalidades:
Cadastro de usuários. (Emily)
Listagem de usuários. (Ana Carla)
Cadastro de produtos. (Lays Luana)
Listagem de produtos. (Camila)

Instruções para rodar o projeto localmente.
Link repositório github para o BACK-END = https://github.com/camilahsp/papelaria-marketplace-back-end.git
Link repositório github para o FRONT-END = https://github.com/camilahsp/papelaria-marketplace-front-end.git
Para rodar o projeto localmente, é necessário clonar os arquivos FRONT-END e BACK-END no github ( os quais estão o link acima para o acesso). Os arquivos são instalados como arquivos ZIP, então é necessário acessar os arquivos do computador e extrair, para descompactar todos os arquivos que estavam comprimidos.
Após isso, abra os arquivos no Visual Studio Code, e dê o comando “NPM INSTALL”, tanto no BACK-END quanto no FRONT-END, no terminal, para que todas as dependências do projeto sejam instaladas. 
Após isso, dê o comando “NPM RUN DEV” no terminal para que o projeto seja iniciado. No FRONT-END, no terminal, aparecerá o endereço onde o projeto está sendo servido localmente, dessa forma: 
![Captura de tela 2024-12-07 113813](https://github.com/user-attachments/assets/6b193e05-85f7-40f6-8738-eaca9a6c16fd)

Aperte a tecla “Ctrl” e acesse o link.
É necessário também, utilizar o comando “NPM RUN DEV” no BACK-END, e após utilizá-lo, aparecerá: 
![Captura de tela 2024-12-07 113917](https://github.com/user-attachments/assets/4f78e86b-b6f6-43fe-aad0-0450143fc379)

Dessa forma, você terá em mãos nosso projeto e todas as suas funcionalidades. 

Por que escolhemos o tema "Livraria"?
Escolhemos o tema "Livraria" porque ele oferece uma maneira prática e eficiente de apresentar produtos, como se fosse um site de vendas de livros e materiais literários. A organização dos itens, o cadastro e a apresentação dos livros de forma clara tornam o processo simples e eficaz, facilitando tanto o trabalho da equipe quanto a experiência dos usuários que acessam a plataforma.
Além disso, o universo das livrarias oferecem inúmeras possibilidades de inovação e crescimento. Podemos explorar uma variedade de produtos, como livros, e-books, marcadores de página, e até itens personalizados, como cadernos e agendas com temas literários. Este mercado variado serve como um ótimo ponto de partida para explorarmos essas alternativas de forma criativa e organizada.
A literatura sempre foi um tema de grande interesse para o grupo, e a ideia de criar um sistema que facilite o acesso a livros e materiais literários nos motivou a desenvolver essa proposta. A diversidade de produtos disponíveis em uma livraria torna o processo de criação e organização mais cativante e inspirador, o que é fundamental para o sucesso do nosso projeto.
Ao optar por esse tema, conseguimos combinar praticidade, eficácia e originalidade, características essenciais para alcançar os objetivos que estabelecemos.

Funcionalidades Implementadas

Cadastro de usuários: Escolhemos essa funcionalidade porque ela é essencial para qualquer plataforma que envolva interação com os usuários. O cadastro de usuários permite que o sistema tenha um controle sobre quem está acessando e utilizando os recursos da livraria, possibilitando um serviço personalizado e eficiente.
Listagem de usuários: A listagem de usuários permite que os administradores ou responsáveis pela livraria visualizem todos os usuários registrados na plataforma. Isso facilita o gerenciamento da base de clientes e possibilita um atendimento personalizado.
Cadastro de produtos: O cadastro de novos livros e materiais na plataforma permite que a livraria mantenha seu estoque atualizado. A funcionalidade oferece aos administradores uma maneira fácil de adicionar novos itens à loja, possibilitando uma experiência de compra mais completa para os usuários
Listagem de produtos: A listagem de produtos, ou seja, livros e outros itens da livraria, é uma funcionalidade importante para permitir que os usuários visualizem os produtos disponíveis para compra ou consulta. Com isso, os visitantes podem navegar por categorias, pesquisar livros e encontrar os itens que mais os interessam.

Link do diagrama: https://lucid.app/lucidspark/1daf2c58-05e0-4fb2-bbaf-a0f9730211dd/edit?viewport_loc=-11136%2C2811%2C8894%2C4377%2C0_0&invitationId=inv_9b5be78d-956f-459c-adb9-a17bccf30f07
![Captura de tela 2024-12-07 114106](https://github.com/user-attachments/assets/193cc03d-1154-4805-9e0d-f23b34814d04)



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
