const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    product(name: String!): Product!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(name: String!, input: UpdateProductInput!): Product!
  }
  type Product {
    name: String
    description: String
    price: Float
    image: String
  }

  input CreateProductInput {
    name: String
    description: String
    price: Float
    image: String
  }
  input UpdateProductInput {
    name: String
    description: String
    price: Float
    image: String
  }
`;
