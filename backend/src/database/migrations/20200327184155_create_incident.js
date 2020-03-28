
exports.up = function(knex) {
  
  return knex.schema.createTable('incidents', function(table){ //ongs é o nome da tabela
    table.increments(); // cria uma chave primária automática
    
    table.string('title').notNullable(); //campo não nulo
    table.string('description').notNullable(); //campo não nulo
    table.decimal('value').notNullable(); //campo não nulo

    table.string('ong_id').notNullable(); // campo para relacionamento com outra tabela

    table.foreign('ong_id').references('id').inTable('ongs'); //chave estrangeira 

  })

};

exports.down = function(knex) {
  
 return knex.schema.dropTable('incidents');

};
