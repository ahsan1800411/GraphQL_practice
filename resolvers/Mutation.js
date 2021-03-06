const { v4: uuidv4 } = require('uuid');

exports.Mutation = {
  createProduct: (parent, { input }, { db }, info) => {
    const { name, price, description, image } = input;
    const newProduct = {
      name,
      price,
      description,
      image,
    };
    db.products.push(newProduct);

    return newProduct;
  },

  updateProduct: (parent, { name, input }, { db }) => {
    const index = db.products.findIndex(
      (product) => product.name === input.name
    );

    db.products[index] = {
      ...db.products[index],
      ...input,
    };
    return db.products[index];
  },
  createUser: (parent, { input }, { db }) => {
    const { name, isPresent } = input;
    const newUser = {
      id: uuidv4(),
      name,
      isPresent,
    };
    db.users.push(newUser);
    return newUser;
  },
};
