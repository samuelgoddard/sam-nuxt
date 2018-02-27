<template>
  <div class="container">
    <h1>Home page</h1>
    <nuxt-link to="/about">About page</nuxt-link>
  </div>
</template>

<script>
  import Header from '~/components/Header'

  export default {
  	layout: 'default',
    components: { 
      Header
    }
  }
</script>