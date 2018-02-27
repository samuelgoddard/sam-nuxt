<template>
  <div>
    <Header/>
    <Particle/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Particle from '~/components/Particle'


export default {
  components: { 
    Header,
    Footer,
    Particle
  }
}
</script>