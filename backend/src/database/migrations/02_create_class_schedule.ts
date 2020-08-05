import Knex from "knex"

export async function up(knex: Knex){
    return knex.schema.createTable("class_schedule", table =>{
        table.increments("id").primary();
        
        table.integer("week_day").notNullable();
        table.integer("from").notNullable();
        table.integer("to").notNullable();

        // criando relacionamentos entre tabelas
        table.integer("class_id")
            .notNullable()
            .references("id")
            .inTable("classes")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); // caso o professor for deletado, as aulas que ele da tambem serao deletadas
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable("class_schedule")
}