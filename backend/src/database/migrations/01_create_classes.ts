import Knex from "knex"

export async function up(knex: Knex){
    return knex.schema.createTable("classes", table =>{
        table.increments("id").primary();
        table.string("subject").notNullable();
        table.decimal("cost").notNullable();

        // criando relacionamentos entre tabelas
        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE"); // caso o professor for deletado, as aulas que ele da tambem serao deletadas
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable("classes")
}