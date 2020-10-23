const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("../../lib/jwt");
const router = express.Router();

// router.post("/signup", async (req, res, next) => {
//   const { name, email, password, profile_picture, user_type_id } = req.body;
//   if (!name || !email || !password || !profile_picture || !user_type_id) {
//     res.status(500).send({
//       status: res.statusCode,
//       message: "Missing info for signup",
//     });
//   }
//   const createUser = {
//     name,
//     email,
//     password,
//     profile_picture,
//     user_type_id,
//   };
//   try {
//     const existingUser = await User.query().where({ email }).first();
//     if (existingUser) {
//       const error = new Error("Email in use");
//       res.status(403);
//       throw error;
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const insertedUser = await User.query().insert({
//       ...createUser,
//       password: hashedPassword,
//     });
//     delete insertedUser.password;
//     const payload = {
//       id: insertedUser.id,
//       name,
//       email,
//     };
//     const token = await jwt.sign(payload);
//     res.json({
//       user: payload,
//       token,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.post("/signin", async (req, res, next) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     res.status(500).send({
//       status: res.statusCode,
//       message: "Missing info for signin",
//     });
//   }
//   try {
//     const user = await User.query().where({ email }).first();
//     if (!user) {
//       const error = new Error("Invalid login");
//       res.status(401);
//       throw error;
//     }
//     const isValidPassword = await bcrypt.compare(password, user.password);
//     if (!isValidPassword) {
//       const error = new Error("Invalid login");
//       res.status(401);
//       throw error;
//     }
//     const payload = {
//       id: user.id,
//       email,
//     };
//     const token = await jwt.sign(payload);
//     res.json({
//       user: payload,
//       token,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// Request Handler
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
router.post("/signup", async (req, res) => {
  // get request input
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
    return res.status(400).json(errors[0]);
  }

  // success
  return res.json({
    ...data.insert_user_one,
  });
});

module.exports = router;
