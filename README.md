# api-without-framework-nodejs

Desenvolvimento de uma API, sem usar um framework, usando apenas o node.js.
configuração do ambiente com npm workspace, para o banco usei apenas um arquivo json para simular um banco.


## Run Locally 

Clone the project / Clonar o projeto

```bash
  git clone https://github.com/dedaldinodev4/api-without-framework-nodejs.git
```

Go to the project directory / Aceder o diretório do projeto

```bash
  cd api-without-framework-nodejs
```

Install dependencies / Instalar Depedências

```bash
  npm install
```

Start the server / Iniciar o servidor

```bash
  npm run dev
```

Use project / Usar o projecto

### Heroes Route

| Description     |                URL                  | Method  |
| --------------- |:-----------------------------------:| -------:|
| Get List Hero   | http://localhost:3000/heroes        | GET     |
| Create Hero     | http://localhost:3000/heroes        | POST    |
| Get a Hero      | http://localhost:3000/heroes/:heroId| GET     |
| Update a Hero   | http://localhost:3000/heroes/:heroId| PUT     |
| Delete a Hero   | http://localhost:3000/heroes/:heroId| DELETE  |