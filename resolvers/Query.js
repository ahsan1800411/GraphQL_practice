exports.Query = {
  products: (parent, args, { db }, info) => {
    return db.products;
  },
  product: (parent, { name }, { db }) => {
    db.products.find((product) => product.name === name);
  },
  users: (parent, args, { db }) => db.users,
  user: (parent, { id }, { db }) => db.users.find((user) => user.id === id),
};
