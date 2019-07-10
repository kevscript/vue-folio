<template>
  <div>
    <div class="container">

      <Header prev="tempeo" next="bingewatcher" />

      <Presentation demo="https://tripeo.herokuapp.com/" repo="https://github.com/kevscript/tripeo" name="Tripeo"
        :skills='["React", "Redux", "styled-components", "Node", "Jest", "Enzyme"]'
        :content='["Tripeo is a mobile-friendly application that helps you anticipate weather along your trips.", "You create a day-by-day roadmap of your journey, and the app takes care of the rest."]' />

      <Gallery :images="['tripeo/tripeo1.png', 'tripeo/tripeo2.png', 'tripeo/tripeo3.png', 'tripeo/tripeo4.png']" />

    </div>
  </div>
</template>


<script>
  import Header from '../components/Header';
  import Presentation from '../components/Presentation';
  import Gallery from '../components/Gallery';

  export default {
    name: 'TripeoPage',
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