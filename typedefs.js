const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type video {
    id: ID
    name: String
    description: String
    total_link: Int
    link: String
  }

  type Query {
    getdata: [video]
  }
`;

module.exports = typeDefs;
