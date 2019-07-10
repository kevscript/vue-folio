<template>
  <div>
    <div class="container">

      <Header prev="bingewatcher" next="ufcify" />

      <Presentation demo="https://youtheme.herokuapp.com/" repo="https://github.com/kevscript/youtheme" name="YouTheme"
        :skills='["React", "Node", "Express", "Material-UI", "Firebase"]'
        :content='["Youtheme helps you to customize your experience by allowing you to sort channels by specific themes.", "It uses Firebase for authentification and storing users data."]' />

      <Gallery
        :images="['youtheme/youtheme2.png', 'youtheme/youtheme1.png', 'youtheme/youtheme3.png']" />

    </div>
  </div>
</template>


<script>
  import Header from '../components/Header';
  import Presentation from '../components/Presentation';
  import Gallery from '../components/Gallery';

  export default {
    name: 'YouthemePage',
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