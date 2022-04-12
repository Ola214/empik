<template>
  <div class="dropdown navbar navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <router-link to="/books">Książki</router-link>
        <!-- <li>Biografie</li>
            <li>Biznes, ekonomia, marketing</li>
            <li>Informatyka</li>
            <li>Literatura faktu, reportaż</li>
            <li>Zdrowie, rodzina, związki</li> -->
      </li>
      <li>
        <ul>
          Ebooki i audiobooki
          <li>Biografie</li>
          <li>Biznes, ekonomia, marketing</li>
          <li>Informatyka</li>
          <li>Literatura faktu, reportaż</li>
          <li>Zdrowie, rodzina, związki</li>
        </ul>
      </li>
      <li>
        <ul>
          Prasa
          <li>Biznes i finanse</li>
          <li>Dla dzieci</li>
          <li>Dla młodzieży</li>
          <li>Hobby</li>
          <li>Komputerowa</li>
          <li>Motoryzacja</li>
        </ul>
      </li>
      <li>
        <ul>
          Muzyka
          <li>Alternatywna</li>
          <li>Biesiadna</li>
          <li>Ciężkie brzmienia</li>
          <li>Country</li>
          <li>Dance</li>
        </ul>
      </li>
      <li>
        <ul>
          Gry i konsole
          <li>Gry</li>
          <li>Klawiatury, myszki, kamery</li>
          <li>Głośniki</li>
          <li>Monitory</li>
        </ul>
      </li>
      <li>
        <ul>
          Szkolne i papiernicze
          <li>
            <ul>
              Szkolno-biurowe
              <li>Pisanie</li>
              <li>Tekstylia szkolne</li>
              <li>Zeszyty i bruliony</li>
            </ul>
          </li>
          <li>
            <ul>
              Art.Plastyczne
              <li>Malowanie</li>
              <li>Rysowanie</li>
              <li>Rzeżba i modelowanie</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div class="cart">
      <i class="fa-solid fa-bag-shopping"></i>
      <div>
        <p class="cart__price">{{ cost }} zł</p>
        <p class="cart__items">{{ items }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      const length = this.$store.getters.getBooks.length;
      if (length !== 0) {
        return length;
      }
      return "Pusty koszyk";
    },
    cost() {
      const books = this.$store.getters.getBooks;
      let allCost = parseFloat("0.00");
      books.forEach((book) => {
        allCost += parseFloat(book.value.new_price.replace(/,/, "."));
      });
      return allCost;
    },
  },
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
.fa-bag-shopping {
  font-size: 2rem;
}
.cart {
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 0.8rem;

    .cart__price {
      color: #fc9667;
      margin: 0px;
    }
    .cart__items {
      color: grey;
      margin: 0px;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  ul {
    list-style-type: none;
  }

  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
