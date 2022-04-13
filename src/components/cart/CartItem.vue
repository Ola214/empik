<template>
  <div class="cart-item">
    <div class="cart-item__top">
      <div class="cart-item__left">
        <img :src="image" alt="" />
      </div>
      <div class="cart-item__right">
        <h3>{{ name }}</h3>
        <p>{{ author }}</p>
        <p>{{ category }} | {{ sub_category }}</p>
      </div>
    </div>
    <div class="cart-item__bottom">
      <div class="cart-item__left">
        <i class="fa-solid fa-basket-shopping"></i>
      </div>
      <div class="cart-item__right">
        <span class="old_price">{{ old_price }} zł</span> &nbsp;
        <span class="new_price">{{ new_price }} zł</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "name",
    "author",
    "category",
    "sub_category",
    "price",
    "old_price",
    "new_price",
    "image",
  ],
};
</script>
<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: column;
  border-bottom: 1px #f1f3f7 solid;

  .cart-item__top {
    display: flex;
    flex-direction: row;
    .cart-item__left {
      img {
        width: 100px;
        height: auto;
      }
    }
    .cart-item__right {
      display: flex;
      flex-direction: column;
      text-align: left;
      h3 {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
  .cart-item__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .cart-item__left {
      font-size: 2rem;
    }
    .cart-item__right {
      .old_price {
        text-decoration: line-through;
        color: grey;
      }
      .new_price {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
