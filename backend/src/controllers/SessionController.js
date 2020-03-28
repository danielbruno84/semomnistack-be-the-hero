const connection = require('../database/connection');


module.exports = {
  async create(request, response) {
  
  const { id } = request.body; // buscar o id da ong no corpo

  const ong = await connection('ongs') //buscar no banco de dados
  .where('id', id)
  .select('name')
  .first(); // não retorna array, apensa um resultado

  if(!ong) {
    return response.status(400).json({ error: 'No ONG  ID'});
  }
  return response.json(ong);
  
  }
}