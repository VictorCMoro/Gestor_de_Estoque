# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Este projeto é uma aplicação de página única (SPA) de gestão de estoque desenvolvida com React, React Router e Vite. Seu principal objetivo é fornecer uma solução eficiente para o gerenciamento de inventário, com funcionalidades que atendem às necessidades de rastreamento e atualização de itens em estoque.

Recursos Principais:

Dashboard Informativo: O projeto apresenta uma página inicial de dashboard que oferece uma visão geral do estoque, incluindo:

Quantidade total de itens diferentes.
Quantidade total de itens (contabilizando todas as unidades).
Itens adicionados nos últimos 10 dias, com uma lista correspondente.
Itens com menos de 10 unidades em estoque, também com uma lista.
Lista de Itens em Estoque: Uma página dedicada exibe uma tabela com informações resumidas de todos os itens em estoque. Para cada item, é possível:

Visualizar detalhes completos.
Atualizar as informações.
Excluir o item, se necessário.
Detalhes de Item: Cada item possui uma página de detalhes que exibe todas as suas propriedades, proporcionando uma visão completa do produto. Além disso, é possível atualizar ou excluir o item a partir desta página.

Criação de Novos Itens: Há uma tela para criar novos itens, onde os campos essenciais incluem nome, quantidade, preço, categoria e descrição. Isso facilita a adição de novos produtos ao estoque.

Atualização de Dados de Itens: A aplicação permite a atualização dos dados de um item existente. A tela de atualização pode seguir o mesmo formato da tela de criação de novos itens, garantindo uma experiência de usuário consistente.

Navegação sem Recarregamento: Todo o fluxo de navegação dentro da aplicação é realizado sem recarregar a página, proporcionando uma experiência suave e ágil para os usuários. Isso é possível graças ao uso do React Router.

Persistência de Dados: Todos os dados são persistidos localmente no armazenamento local (localStorage) do navegador. Isso garante que as informações do estoque sejam preservadas, mesmo após a atualização da página ou o fechamento do aplicativo.

Flexibilidade de Estilização: A estilização e a utilização de bibliotecas adicionais ficam a critério do desenvolvedor, permitindo a personalização do visual de acordo com as preferências.