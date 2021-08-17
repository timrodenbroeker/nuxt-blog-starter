<template>
  <main>
  <Navigation/>
  <article class="container">
    <h1 class="title">{{ article.title }}</h1>
    <nuxt-content :document="article" />

  </article>
  </main>
</template>

<script>
  export default {
   async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return {
      article
    }
  }
  }
</script>

<style>
  .title {
    font-size: calc(18px + 3vw);
  }
</style>