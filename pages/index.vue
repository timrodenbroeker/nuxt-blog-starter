<template>
  <main>
  <Navigation/>
  <div class="container">
      <div class="post" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <div>
            <h2>{{ article.title }}</h2>
          </div>
        </NuxtLink>
      </div>

  </div>
  </main>
</template>

<script>

  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }

</script>

<style scoped>
  .post a {
    display: block;
    border-bottom: 1px solid black;
    padding-top: 15px;
  }

  .post h2 {

  }

  .post:hover h2 {
    color: red;
  }
</style>