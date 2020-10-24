const fetch = require("node-fetch");
const bcrypt = require("bcrypt");

const HASURA_OPERATION = `
query signin($email: String!, $password: String!) {
  user(where: { email: {_eq: $email} }){
    id
    password
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
const handler = async (req, res) => {
  // get request input
  const { email, password } = req.body.input;
  const { data, error } = await execute({ email });

  // In case of errors:
  if (error) {
    return res.status(400).json({
      message: "error happened",
    });
  }

  const user = data && data.user[0];
  if (!user) {
    return res.status(400).json({
      message: "Invalid Login",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid Login",
    });
  }

  // success
  return res.json({
    id: user.id,
  });
};

module.exports = handler;
