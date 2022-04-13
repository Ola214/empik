export default {
  addToCart(context, newBook) {
    context.commit("addToCart", newBook);
  },
  removeFromCart(context, bookId) {
    context.commit("removeFromCart", bookId.value);
  },
  editAmount(context, bookId, amount) {
    context.commit("edmitAmount", bookId.value, amount.value);
  }
};
