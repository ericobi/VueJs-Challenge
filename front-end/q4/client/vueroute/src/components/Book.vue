<template>
  <div class="container">
      <table><tr><td>
      <div>
        <h3>{{ book_id }}. {{ title }}</h3>
        <h5>({{ rating }}/10)</h5>
      </div>

      <div class="author">{{ author }}</div>

      <div class="synopsis">{{ processed_str }}</div>

      <button v-if="!upvoted" class="upvote">Upvote</button>
      <button v-if="upvoted" class="upvoted">Upvoted</button>

      Upvoted {{ upvotes }} times
        </td><td>
      <img class="cover" :src="cover" v-on:click="$emit('book_click', book_id)">
      </td></tr></table>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      processed_str: this.synopsis.substring(0, 200) + "..."
    }
  },
  props: {
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../scss/main.scss"
</style>
