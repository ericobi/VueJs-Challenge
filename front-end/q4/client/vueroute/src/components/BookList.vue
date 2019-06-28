<template>
  <div id="app">
      <h1>Top books of all time</h1>
      <table>
        <tr id="book" v-for="(book, index) in booklist" v-bind:key="index">
          <td>
            <Book :title="book.title" 
                  :author="book.author" 
                  :cover="book.cover" 
                  :rating="book.rating" 
                  :slug="book.slug" 
                  :synopsis="book.synopsis" 
                  :upvoted="book.upvoted" 
                  :upvotes="book.upvotes" 
                  :book_id="index+1"
                  v-on:book_click="view_book($event)"/>
          </td>
        </tr>
      </table>
  </div>
</template>

<script>
import Book from './Book.vue'
import axios from 'axios'


var SERVER_URL = "http://localhost:3000"

export default {
  name: 'app',
  components: {
    Book
  },
  data() {
    return {
      booklist: [
      ]
    }
  },
  methods: {
    view_book: function(index) {
      this.$router.push({path: `/book/${index}`});
    }
  },
  mounted() {
    axios.get(SERVER_URL+"/books")
      .then(res => {
        this.booklist = res.data.books;
      })
      .catch(err => alert(err));
  }
}


</script>

<style lang="scss" scoped>
@import '../scss/main.scss'
</style>
