// Request Handler
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");

const HASURA_OPERATION = `
mutation($email: String!, $name: String!, $password: String!, $profile_picture:String!, $user_type_id:Int! ) {
  insert_user_one(object: {
    email: $email,
    name: $name,
    password: $password,
    profile_picture: $profile_picture,
    user_type_id: $user_type_id
  }){
    id
  }
}
`;

// execute the parent operation in Hasura
const execute = async (variables) => {
  const fetchResponse = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: HASURA_OPERATION,
      variables,
    }),
  });
  const data = await fetchResponse.json();
  console.log("DEBUG: ", data);
  return data;
};

// Request Handler
const handler = async (req, res, next) => {
  // get request input
  try {
    const {
      email,
      name,
      password,
      profile_picture,
      user_type_id,
    } = req.body.input;

    // run some business logic
    const hashedPassword = await bcrypt.hash(password, 10);

    // execute the Hasura operation
    const { data, errors } = await execute({
      email,
      name,
      password: hashedPassword,
      profile_picture,
      user_type_id,
    });

    // if Hasura operation errors, then throw error
    if (errors) {
      return res.status(403).json(errors[0]);
    }

    // success
    return res.json({
      ...data.insert_user_one,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      error: res.statusCode,
      message: "Error at " + req.originalUrl,
    });
  }
};

module.exports = handler;
