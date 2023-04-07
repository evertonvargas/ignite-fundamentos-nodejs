# Fundamentos do NodeJS 

Projeto do bootcamp Ignite da [RocketSeat](https://www.rocketseat.com.br/) na versão lançada da trilha 2023. No primeiro módulo foi desenvolvido uma API RESTful com NodeJS focada nos fundamentos da tecnologia, sem frameworks ou bibliotecas externas.

## Fundamentos do NodeJS

No primeiro projeto da trilha de NodeJS foi construída uma API simples porém utilizando somente recursos nativos do NodeJS.

O conteúdo aborda módulos internos do NodeJS como HTTP, Crypto e File System e sobre fundamentos HTTP como requests, responses, headers, status code, route e query parameters, etc. Também possuem profundidade em Streams no NodeJS e como aplica-las para realizarmos operações assíncronas e parciais em nosso back-end.

Como o objetivo é entender o que os famosos frameworks fazem por debaixo dos panos, a API é simples e é composta pelas rotas abaixo:

<details>
  <summary>GET <code>/users</code></summary>
  <br>
  Rota para listar os usuários cadastrados. Seu retorno será um JSON com um array contendo os objetos de todos os usuários cadastrados.
</details>

<details>
  <summary>POST <code>/users</code></summary>
  <br>
  Rota para cadastrar um novo usuário. O corpo da requisição é semelhante ao exemplo abaixo e a rota não retornará nada além do status code <code>201</code>.
  <br>
  <pre>
    <code>
      {
        "name": "John Doe",
        "email": "johndoe@example.com"
      }
    </code>
  </pre>
</details>

<details>
  <summary>PUT <code>/users/:userId</code></summary>
  <br>
  Rota para atualizar o cadastro de um usuário. A rota recebe como parâmetro o id do usuário a ser atualizado e o corpo da requisição é semelhante ao exemplo abaixo e substituirá os dados preenchidos anteriormente. A rota não retornará nada além do status code <code>204</code>.
  <br>
  <pre>
    <code>
      {
        "name": "John Doe",
        "email": "johndoe@example.com"
      }
    </code>
  </pre>
</details>

<details>
  <summary>DELETE <code>/users/:userId</code></summary>
  <br>
  Rota para remover o cadastro de um usuário. A rota recebe como parâmetro o id do usuário a ser excluído. A rota não retornará nada além do status code <code>204</code>.
</details>

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [NodeJS](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/evertonvargas/ignite-fundamentos-nodejs.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ignite-fundamentos-nodejs

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev

# O servidor inciará na porta 4000 - acesse <http://localhost:4000>
```