export default {
  addToCart(context, newBook) {
    context.commit("addToCart", newBook);
  }
};
