const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const { makeExecutableSchema } = require("graphql-tools");
const { ApolloServer } = require("apollo-server-express");

const PORT = 8080;

// Create Express application
const app = express();

// Apply CORS to the endpoints
app.use(cors({}));

// Add body parser
app.use(bodyParser.json());

// Add health endpoint for testing
app.get("/health", (req, res) => {
  res.send({ status: "UP" });
});

// Create GRAPHQL SCHEMA
const dogResolver = () => {
  return {
    id: 1,
    age: Math.floor( Math.random() * 12),
    name: "Rex"
  };
};

const ownerResolver = () => {
  throw new Error("Rex lost his owner!!!! Ahh!!!");
};

const resolvers = {
  Query: {
    dog: dogResolver
  },
  Dog: {
    owner: ownerResolver
  }
};

const typeDefs = `
  type Dog {
    id: ID!
    name: String!
    age: Int!
    owner: Owner
  }
  type Owner {
    name: String!
  }
  type Query {
    dog(id: ID!): Dog!
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({
    req,
    res
  })
});

server.applyMiddleware({ app, path: "/graphql", cors: {} });

// Create the http server
http.createServer(app).listen(PORT, () => {
  console.log("Http server is now running on port", PORT);
});

