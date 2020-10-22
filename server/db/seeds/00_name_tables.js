const Knex = require("knex");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  //DELETES ALL DATA
  await Promise.all(
    Object.values(tableNames).map((table) => knex(table).del())
  );

  await knex(tableNames.user_type).insert([
    { name: "Actor" },
    { name: "Voice Actor" },
    { name: "Dancer" },
    { name: "Model" },
    { name: "Recruiter" },
  ]);

  await knex(tableNames.city).insert([
    { name: "Izmir" },
    { name: "Istanbul" },
    { name: "Ankara" },
  ]);

  await knex(tableNames.highlight_type).insert([
    { name: "Video" },
    { name: "Voice" },
  ]);

  await knex(tableNames.eye_color).insert([
    { name: "Amber" },
    { name: "Blue" },
    { name: "Brown" },
    { name: "Green" },
    { name: "Hazel" },
  ]);

  await knex(tableNames.hair_color).insert([
    { name: "Black" },
    { name: "Brown" },
    { name: "Blond" },
    { name: "White" },
    { name: "Dyed" },
    { name: "Bald" },
  ]);

  await knex(tableNames.gender).insert([
    { name: "Male" },
    { name: "Female" },
    { name: "Non-Binary" },
  ]);

  await knex(tableNames.ethnicity).insert([
    { name: "Asian" },
    { name: "Black / African Descent" },
    { name: "Latino / Hispanic" },
    { name: "Middle Eastern" },
    { name: "White / European Descent" },
  ]);

  await knex(tableNames.body_type).insert([
    { name: "Average" },
    { name: "Slim" },
    { name: "Toned" },
    { name: "Muscular" },
    { name: "Curvy" },
  ]);

  await knex(tableNames.voice_type).insert([
    { name: "Articulate" },
    { name: "Child-like" },
    { name: "Comedic" },
    { name: "Deep" },
  ]);

  await knex(tableNames.audition_type).insert([
    { name: "Film" },
    { name: "Musical" },
    { name: "Voiceover" },
    { name: "Commercial" },
    { name: "Modeling" },
    { name: "Event" },
  ]);

  await knex(tableNames.tag).insert([
    { name: "Paid" },
    { name: "No Pay" },
    { name: "Work From Home" },
  ]);

  await knex(tableNames.role_type).insert([
    { name: "Lead" },
    { name: "Supporting" },
    { name: "Background / Extra" },
  ]);
};
