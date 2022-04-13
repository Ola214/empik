<template>
  <div class="books-categories">
    <aside class="categories__aside">
      <nav>
        <b>Kategoria</b>
        <ul>
          <li v-for="category in categories" :key="category">
            <p v-if="category.active === 0">
              {{ category.name }}
            </p>
            <p v-else>
              <b>{{ category.name }}</b>
            </p>
          </li>
        </ul>
      </nav>
    </aside>
    <main>
      <p>Znaleziono {{ books.length }} produktów</p>
      <div class="books">
        <book
          v-for="book in books"
          :key="book.id"
          :id="book.id"
          :name="book.name"
          :author="book.author"
          :old_price="book.old_price"
          :new_price="book.new_price"
          :rating="book.rating"
          :category="book.category"
          :sub_category="book.sub_category"
          :format="book.format"
          :image="book.image"
          @add-to-cart="addToCart"
        >
        </book>
      </div>
    </main>
  </div>
</template>
<script>
import Book from "./Book.vue";

export default {
  components: {
    Book,
  },
  data() {
    return {
      categories: [
        { name: "Biografie", id: 1, active: 0 },
        { name: "Biznes, ekonomia, marketing", id: 2, active: 0 },
        { name: "Informatyka", id: 3, active: 0 },
        { name: "Literatura faktu, reportaż", id: 4, active: 0 },
        { name: "Zdrowie, rodzina, związki", id: 5, active: 0 },
      ],
      books: [
        {
          id: 1,
          name: "Kiedy ciało mówi nie",
          author: "Mate Gabor",
          old_price: "49,99",
          new_price: "29,63",
          rating: "4.7",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/kiedy-cialo-mowi-nie.jpg",
        },
        {
          id: 2,
          name: "Celiakia. Życie bez glutenu",
          author: "Musiałowska Dominika",
          old_price: "52,90",
          new_price: "34,37",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/celiakia-zycie-bez-glutenu.jpg",
        },
        {
          id: 3,
          name: "Biologia przekonań",
          author: "Lipton Bruce H.",
          old_price: "59,90",
          new_price: "38,47",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka zintegrowana",
          image: "/img/biologia-przekonan.jpg",
        },
        {
          id: 4,
          name: "Co jeść, żeby wzmocnić zdrowie psychiczne",
          author: "Ramsey Drew",
          old_price: "42,90",
          new_price: "32,31",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/co-jesc-zeby-wzmocnic-zdrowie-psychiczne.jpg",
        },
        {
          id: 5,
          name: "Zdrowie, energia, lekkość. Błonnikowy program dla jelit",
          author: "Bulsiewicz Will",
          old_price: "52,90",
          new_price: "34,34",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/zdrowie-energia-lekkosc-blonnikowy.jpg",
        },
        {
          id: 6,
          name: "Sezon na zdrowie. Jak nie chorować w toksycznym świecie",
          author: "Goodman Jenny",
          old_price: "49,99",
          new_price: "36,74",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/sezon-na-zdrowie-jak-nie-chorowac.jpg",
        },
        {
          id: 7,
          name: "Kryształowe Reiki. Podręcznik pracy z energią czakr, kryształów i kamieni szlachetnych - skuteczne uzdrawianie ciała, umysłu i duszy",
          author: "Mitchell Krista",
          old_price: "69,60",
          new_price: "45,39",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/krysztalowe-reiki-podrecznik-pracy-z-energia-czakr.jpg",
        },
        {
          id: 8,
          name: "Uzależnienie w rodzinie",
          author: "Stanger Louise",
          old_price: "39,90",
          new_price: "31,80",
          rating: "5",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/uzaleznienie-w-rodzinie.jpg",
        },
        {
          id: 9,
          name: "Pełnia sił. Skuteczny plan, dzięki któremu pokonasz zmęczenie i odzyskasz siebie",
          author: "Shah Amy",
          old_price: "49,99",
          new_price: "34,35",
          rating: "4.6",
          category: "Książki",
          sub_category: "Zdrowie, rodzina, związki",
          format: "okładka miękka",
          image: "/img/pelnia-sil-skuteczny-plan.jpg",
        },
      ],
    };
  },
  methods: {
    addToCart(bookId, bookName, bookSubCategory) {
      this.addToCartOnly(bookId, bookName, bookSubCategory);
      this.addToStore(bookId);
    },
    addToStore(bookId) {
      const itemIndex = this.books.findIndex(({ id }) => id === bookId);
      const bookToAdd = this.books[itemIndex];

      if (bookToAdd.amount) {
        bookToAdd.amount = bookToAdd.amount + 1;
        this.$store.dispatch("editAmount", bookToAdd.id, bookToAdd.amount);
      } else {
        bookToAdd.amount = 1;
        this.$store.dispatch("addToCart", { value: bookToAdd });
      }
    },
    addToCartOnly(bookId, bookName, bookSubCategory) {
      this.categories.forEach((x, index) => {
        this.categories[index].active = 0;
      });

      const itemIndex = this.categories.findIndex(
        ({ name }) => name === bookSubCategory
      );
      const item = this.categories[itemIndex];
      item.active = 1;
      this.categories[itemIndex] = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.books,
.books-categories {
  display: flex;
  flex-direction: row;
}
.books {
  flex-wrap: wrap;
}
.categories__aside {
  width: 1200px;
}
</style>
