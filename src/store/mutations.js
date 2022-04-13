export default {
  addToCart(state, newBook) {
    state.books.push(newBook);
  },
  removeFromCart(state, bookId) {
    state.books = state.books.filter(function (obj) {
      return obj.value.id !== bookId;
    });
  },
  editAmount(state, bookId, amount) {
    const index = state.books.findIndex((obj => obj.id === bookId));
    state.books[index].amount = amount;
  }
};
