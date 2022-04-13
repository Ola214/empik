<template>
  <div class="cart">
    <div class="cart-wrapper">
      <p>Zamówienia od {{ appName }}</p>
      <cart-item
        v-for="book in books_cart"
        :key="book.value.id"
        :id="book.value.id"
        :name="book.value.name"
        :author="book.value.author"
        :old_price="book.value.old_price"
        :new_price="book.value.new_price"
        :rating="book.value.rating"
        :category="book.value.category"
        :sub_category="book.value.sub_category"
        :format="book.value.format"
        :image="book.value.image"
      ></cart-item>
    </div>
  </div>
</template>
<script>
import CartItem from "./CartItem.vue";

export default {
  inject: ["appName"],
  components: {
    CartItem,
  },
  data() {
    return {};
  },
  computed: {
    books_cart() {
      return this.$store.getters.getBooks;
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  background-color: #f1f3f7;
}
.cart-wrapper {
  background-color: white;
  margin: 50px auto;
  min-height: calc(100vh - 156px);
  min-width: 50vw;
  color: black;

  p {
    font-weight: bold;
    text-align: left;
    padding: 20px;
    border-bottom: 1px #f1f3f7 solid;
  }
}
</style>
