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

### Movie Route

| Description     |                URL               | Method  |
| --------------- |:--------------------------------:| -------:|
| Get List Movie  | http://localhost:3000/movies     | GET     |
| Create Movie    | http://localhost:3000/movies     | POST    |
| Get a Movie     | http://localhost:3000/movies/:id | GET     |
| Update a Movie  | http://localhost:3000/movies/:id | PUT     |
| Delete a Movie  | http://localhost:3000/movies/:id | DELETE  |