const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");
const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });
});

mongoose.connect("mongodb://localhost:27017/shortvideo").then(() => {
  console.log("conection successful....");
});
app.listen(port, () => {
  console.log(` Server ready at http://localhost:4000${server.graphqlPath}`);
});
return { server, app };
