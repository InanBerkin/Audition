const tableNames = require("../../src/constants/tableNames");
const Knex = require("knex");
const { physical_attribute } = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function createNameTable(knex, table_name) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable().unique();
  });
}

function url(table, columnName) {
  table.string(columnName, 2000);
}

function email(table, columnName) {
  return table.string(columnName, 254);
}

function references(table, tableName, notNullable = true, columnName = "") {
  const definition = table
    .integer(`${columnName || tableName}_id`)
    .unsigned()
    .references("id")
    .inTable(tableName)
    .onDelete("cascade");

  if (notNullable) {
    definition.notNullable();
  }
  return definition;
}

/** @param {Knex} knex*/
exports.up = async function (knex) {
  await Promise.all([
    createNameTable(knex, tableNames.user_type),
    createNameTable(knex, tableNames.city),
    createNameTable(knex, tableNames.hair_color),
    createNameTable(knex, tableNames.eye_color),
    createNameTable(knex, tableNames.ethnicity),
    createNameTable(knex, tableNames.gender),
    createNameTable(knex, tableNames.body_type),
    createNameTable(knex, tableNames.voice_type),
    createNameTable(knex, tableNames.highlight_type),
    createNameTable(knex, tableNames.audition_type),
    createNameTable(knex, tableNames.role_type),
    createNameTable(knex, tableNames.tag),
  ]);

  await knex.schema.createTable(tableNames.physical_attribute, (table) => {
    table.increments().notNullable();
    table.integer("height");
    table.integer("age");
    references(table, tableNames.eye_color, false);
    references(table, tableNames.hair_color, false);
    references(table, tableNames.gender, false);
    references(table, tableNames.ethnicity, false);
    references(table, tableNames.body_type, false);
  });

  await knex.schema.createTable(tableNames.voice_attribute, (table) => {
    table.increments().notNullable();
    references(table, tableNames.voice_type, false);
  });

  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string("password", 127).notNullable();
    table.string("name").notNullable();
    url(table, "profile_picture");
    email(table, "email").unique();
    table.timestamps(false, true);
    references(table, tableNames.user_type);
    references(table, tableNames.city, false);
    references(table, tableNames.physical_attribute, false);
    references(table, tableNames.voice_attribute, false);
  });

  await knex.schema.createTable(tableNames.highlight, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable();
    url(table, "source_url");
    references(table, tableNames.user);
    references(table, tableNames.highlight_type);
  });

  await knex.schema.createTable(tableNames.requirement, (table) => {
    table.increments().notNullable();
    references(table, tableNames.physical_attribute, false);
    references(table, tableNames.voice_attribute, false);
  });

  await knex.schema.createTable(tableNames.audition, (table) => {
    table.increments().notNullable();
    table.string("company_name").notNullable();
    table.string("name").notNullable();
    table.text("description").notNullable();
    table.timestamps(false, true);
    references(table, tableNames.user);
    references(table, tableNames.city);
    references(table, tableNames.audition_type);
  });

  await knex.schema.createTable(tableNames.audition_tag, (table) => {
    table.increments().notNullable();
    references(table, tableNames.audition);
    references(table, tableNames.tag);
  });

  await knex.schema.createTable(tableNames.role, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable();
    table.string("description").notNullable();
    references(table, tableNames.audition);
    references(table, tableNames.requirement, false);
    references(table, tableNames.role_type);
  });

  await knex.schema.createTable(tableNames.applicant, (table) => {
    table.increments().notNullable();
    references(table, tableNames.user);
    references(table, tableNames.audition);
    table.datetime("apply_date").defaultTo(knex.fn.now());
  });
};

exports.down = async function (knex) {
  await Promise.all(
    Object.values(tableNames).map((table) =>
      knex.schema.dropTableIfExists(table)
    )
  );
};
