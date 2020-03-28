
exports.up = function(knex) { // Cria a tabela

  return knex.schema.createTable('ongs', function(table){ //ongs é o nome da tabela
    table.string('id').primary(); // nome do primeiro campo e chave primária
    table.string('name').notNullable(); //campo não nulo
    table.string('email').notNullable(); //campo não nulo
    table.string('whatsapp').notNullable(); //campo não nulo
    table.string('city').notNullable(); //campo não nulo
    table.string('uf', 2 ).notNullable(); //o segundo parâmetro representa o tamanho do campo

  })
  
};

exports.down = function(knex) { // Faz voltar atrás, DELETA a table

return knex.schema.dropTable('ongs'); // exclui tabela
  
};
