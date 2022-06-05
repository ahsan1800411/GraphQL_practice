exports.User = {
  product: (parent, args, { db }) => {
    return db.products.find((product) => product.id === parent.productId);
  },
};
