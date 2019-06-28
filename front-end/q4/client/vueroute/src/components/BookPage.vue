<template>
  <div class="container">
      <div class="topbar">
        <h1>{{ title }}</h1>

        <div class="panel">
          <div id="upvotes_count">
            Upvoted {{ upvotes }} times
          </div>

          <button v-if="!upvoted" class="upvote">Upvote</button>
          <button v-if="upvoted" class="upvoted">Upvoted</button>
        </div>
      </div>

      
      <div class="author">{{ author }}</div>
      
      <div id="cover">
      <img class="cover" :src="cover">
      </div>

      <h2>Synopsis</h2>

      <div class="synopsis">{{ synopsis }}</div>

      <div class="synopsis">{{ synopsis }}</div>

      <h5>Rating: {{ rating }}/10</h5>
      
  </div>
</template>

<script>

import axios from 'axios'

var SERVER_URL = "http://localhost:3000"

export default {
  name: 'BookPage',
  data() {
    return {
      book_id: Number,
      author: String,
      cover: String,
      rating: String,
      slug: String,
      synopsis: String,
      title: String,
      upvoted: Boolean,
      upvotes: Number
    }
  },
  mounted() {
    if (isNaN(Number(this.$route.params.id))) {
      this.$router.push({path: `/`});
      this.$router.push({path: `/404`});
    } else {
      this.book_id = this.$route.params.id - 1;
      axios.get(SERVER_URL+"/books")
        .then(res => {
          this.title = res.data.books[this.book_id].title;
          this.author = res.data.books[this.book_id].author;
          this.cover = res.data.books[this.book_id].cover;
          this.rating = res.data.books[this.book_id].rating;
          this.slug = res.data.books[this.book_id].slug;
          this.synopsis = res.data.books[this.book_id].synopsis;
          this.upvoted = res.data.books[this.book_id].upvoted;
          this.upvotes = res.data.books[this.book_id].upvotes;
        })
        .catch(err => alert(err));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../scss/book.scss'
</style>
