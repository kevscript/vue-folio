<template>
  <div>
    <div class="container">

      <Header prev="tripeo" next="youtheme" />

      <Presentation demo="https://binge-watcher.netlify.com/" repo="https://github.com/kevscript/binge-watcher"
        name="Binge Watcher" :skills='["React", "Redux", "styled-components", "PropTypes"]'
        :content='["Bingewatcher is a web library that gives you access to informations on close to 500.000 movies.", "From ratings and trailers, to casts and actors bios, it allows you to search for specific movies, by name or genre, and receive related recommandations."]' />

      <Gallery :images="['binge/binge1.png', 'binge/binge2.png', 'binge/binge3.png', 'binge/binge4.png']" />

    </div>
  </div>
</template>


<script>
  import Header from '../components/Header';
  import Presentation from '../components/Presentation';
  import Gallery from '../components/Gallery';

  export default {
    name: 'BingePage',
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