const Knex = require("knex");
const faker = require("faker");
const tableNames = require("../../src/constants/tableNames");

/** @param {Knex} knex*/
function getRandomTwoRandomUser(knex) {
  return knex(tableNames.user).orderByRaw("random()").select("id").limit(2);
}

/** @param {Knex} knex*/
async function generateRandomMessages(knex) {
  const [sender, receiver] = await getRandomTwoRandomUser(knex);
  console.log(sender, receiver);

  await knex(tableNames.messages).insert({
    sender_id: sender.id,
    receiver_id: receiver.id,
    content: faker.lorem.lines(1),
  });

  await knex(tableNames.messages).insert({
    sender_id: receiver.id,
    receiver_id: sender.id,
    content: faker.lorem.lines(1),
  });
}

/** @param {Knex} knex*/
exports.seed = async function (knex) {
  await Promise.all(
    Array(5)
      .fill("")
      .map(() => generateRandomMessages(knex))
  );
};
