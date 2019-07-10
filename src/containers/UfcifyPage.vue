<template>
  <div>
    <div class="container">

      <Header prev="youtheme" next="tempeo" />

      <Presentation demo="https://ufcify.herokuapp.com/" repo="https://github.com/kevscript/ufcify" name="Ufcify"
        :skills='["React", "Redux", "Node", "Cheerio"]'
        :content='["Ufcify is an application that uses UFC data to provide you with relevant informations about the organisation and its fighters.", "Its built on an server that scrapes the data from the official api."]' />

      <Gallery :images="['ufcify/ufcify.png']" /> -->

    </div>
  </div>
</template>


<script>
  import Header from '../components/Header';
  import Presentation from '../components/Presentation';
  import Gallery from '../components/Gallery';

  export default {
    name: 'UfcifyPage',
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