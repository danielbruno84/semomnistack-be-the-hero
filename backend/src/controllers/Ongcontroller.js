const connection = require('../database/connection'); // importando conexão com DB
const crypto = require('crypto'); // pacote do Node para segurança


module.exports = {
  async index(request, response) {

    const ongs =  await  connection('ongs').select('*');
 
    return response.json(ongs);
 
  },


  async create(request, response){

  const { name, email, whatsapp, city, uf} = request.body; // receber os dados da requsição

  const id = crypto.randomBytes(4).toString('HEX'); //gerar string hexadecimal
 
   await  connection('ongs').insert({
   id,
   name,
   email,
   whatsapp,
   city,
   uf,
 }) 
 
  return response.json({ id }); // json vazio, por enquanto

  }

}