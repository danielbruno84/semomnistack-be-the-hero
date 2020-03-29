const express = require("express");  // traz o módulo express para o arquivo

const cors = require('cors'); // proteção/permissão para acesso

const routes = require('./routes')  // importa a função de rotas

const app = express(); // cria uma instância da aplicação


app.use(cors());

app.use(express.json()); //chama a interpretação do Json
// localhost:3030/user é a rota, user é um recurso
app.use(routes); // habilita o uso da função de rotas

//Método GET: busca informação. Quando demos um ENTER na barra
//Método POST: criar uma informação no backend
//Método PUT: Alterar uma informação
//Método DELETE : deletar uma informação

//Soft Insomnia pode ser usado para testar rotas e métodos

//>> Query Params: Tipos de Parâmetros nomeados enviados na rota após ?
// servem para filtros, paginação... 
//>> Route Params: serve para buscar um usuário, identificar recursos
// como rotas com ids
//>> Request Body: corpo da requisição para alterar recursos.

//app.get("/users", ( request, response ) => {
//retorna para http://localhost:3333/users?name=Daniel
// params como name:daniel
          
 // app.get("/users/:id", ( request, response ) => {          
 // retorna para http://localhost:3333/users/1
 // params como id:1

//  app.post("/users", (request, response)=>{
//  //passar o corpo da requisição com o POST pelo body
//  const body = request.body;

//  // passar recursos pela query usando o argumento REQUEST para 
//  // passar as solicitações, inclusive via barra de endereço
//  // const params = request.query; //para parametros gerais
//  //const params = request.params; //para rotas específicas, Ids

//   //console.log(params);  
//     console.log(body);

//   //cria uma resposta com o response
//   // return response.send(‘Hello World”);   o send envia um texto e não JSON
//       return response.json({
//   curso: "Semana Omnistack 11.0",
//   aluno: "Daniel Nobre"
// })
// });


 // #### BANCOS DE DADOS
// SQL: MySQL, SQLite, PostGree, Oracle, Microsoft SQL Server
// NoSql: MongoDB, CouchDB, etc

// Driver (Pacote oficial) - Query fica : SELECT * FROM users
// Query Builder (KNEX.JS): table('users').select('*').where()

// #### Banco de dados

app.listen(3333);
