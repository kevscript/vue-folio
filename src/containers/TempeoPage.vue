<template>
  <div>
    <div class="container">

      <Header prev="ufcify" next="tripeo" />

      <Presentation demo="https://tempeo.herokuapp.com/" repo="https://github.com/kevscript/tempeo" name="Tempeo"
        :skills='["Javascript", "ES6", "Node", "Express"]'
        :content='["Tempeo is a geo-climatic application monitoring weather around the world.", "Its built on multiple api layers. It provides an interactive map which can be used to target specific locations, and a search bar with autocompletion for cities and addresses."]' />

      <Gallery :images="['tempeo/tempeo.png']" /> -->

    </div>
  </div>
</template>


<script>
  import Header from '../components/Header';
  import Presentation from '../components/Presentation';
  import Gallery from '../components/Gallery';

  export default {
    name: 'TempeoPage',
    components: {
      Header,
      Presentation,
      Gallery
    }
  }
</script>

<style lang="scss">
  @import "../styles/index.scss";
</style>