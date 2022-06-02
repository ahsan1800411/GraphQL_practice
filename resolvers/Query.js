exports.Query = {
  products: (parent, args, { db }, info) => {
    return db.products;
  },
  product: (parent, { name }, { db }) => {
    db.products.find((product) => product.name === name);
  },
};
