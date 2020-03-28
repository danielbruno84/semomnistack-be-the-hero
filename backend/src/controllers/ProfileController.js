const connection = require('../database/connection');


module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization; // Pega Id do cabeçalho, Ong logada, contexto, localização
  
    const incidents = await connection('incidents')
    .where('ong_id', ong_id)
    .select('*');

    return response.json(incidents);
  }
}