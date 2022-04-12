<template>
  <div class="book">
    <div class="book__img">
      <img :src="image" alt="" style="height: 250px; width: auto" />
    </div>
    <div class="book__content">
      <div class="book__price-rating">
        <div>
          <span class="book__new-price">{{ new_price }} zł</span
          >&nbsp;&nbsp;<span class="book__old-price">{{ old_price }} zł</span>
        </div>
        <div><i class="fa-solid fa-star"></i>{{ rating }}</div>
      </div>
      <div>
        <h3 class="book__name">{{ name }}</h3>
        <p class="book__author">{{ author }}</p>
        <p class="book__category">{{ category }} | {{ format }}</p>
        <p class="book__badge">Wysyłamy w 24h</p>
        <p class="book__badge">Odbiór w salonie 0 zł</p>

        <button @click="addToCart">Dodaj do koszyka</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "name",
    "id",
    "author",
    "old_price",
    "new_price",
    "rating",
    "category",
    "sub_category",
    "format",
    "image",
  ],
  emits: ["add-to-cart"],
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.id, this.name, this.sub_category);
    },
  },
};
</script>
<style scoped>
button {
  margin-top: 10px;
}

.fa-star {
  color: #ffd75f;
}
.book {
  width: 350px;
  height: 550px;
  border: 1px solid rgb(161, 160, 160);
  padding: 50px 20px 50px 20px;
}

.book__price-rating {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
}
.book__new-price {
  font-weight: bold;
  color: #fc7c41;
  font-size: 1rem;
}
.book__old-price {
  color: grey;
  text-decoration: line-through;
  font-size: 0.8rem;
}
.book__name {
  font-weight: bold;
  font-size: 1rem;
  text-align: left;
  margin-bottom: 0px;
}
.book__author {
  font-size: 0.8rem;
  text-align: left;
  margin-top: 0px;
}
.book__category {
  color: rgb(161, 160, 160);
  font-size: 0.8rem;
  text-align: left;
}
.book__badge {
  color: rgb(161, 160, 160);
  font-size: 0.8rem;
  text-align: left;
  margin-bottom: 0px;
}
</style>
