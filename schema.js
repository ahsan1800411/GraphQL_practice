const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    product(name: String!): Product!
    users: [User!]!
    user(id: String!): User
  }
  type Mutation {
    createProduct(input: CreateProductInput!): Product!
    updateProduct(name: String!, input: UpdateProductInput!): Product!
    createUser(input: CreateUserInput!): User!
  }
  type Product {
    name: String
    description: String
    price: Float
    image: String
  }
  type User {
    id: String!
    name: String!
    isPresent: Boolean!
    product: Product!
  }

  input CreateUserInput {
    id: String
    name: String!
    isPresent: Boolean!
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
