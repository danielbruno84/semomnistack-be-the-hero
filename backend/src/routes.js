const express = require('express');

const Ongcontroller = require('./controllers/Ongcontroller');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);//rota de login
routes.get("/ongs",  Ongcontroller.index);// rota para listar todos os bancos de dados
routes.post("/ongs", Ongcontroller.create);// rota p/ criar Ongs
routes.post("/incidents", IncidentController.create); //rota pra criar incidents
routes.get("/incidents", IncidentController.index);// listar casos
routes.delete('/incidents/:id', IncidentController.delete); //deletar
routes.get("/profile", ProfileController.index);

module.exports = routes;