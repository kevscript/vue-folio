<template>
  <div class="container">

    <Header :prev="prev" :next="next" />
    
    <div class="flex-container">
      <Presentation :name="name" :demo="demo" :repo="repo" :skills="skills" :content="content" />
      <Gallery :images="images" />
    </div>

  </div>
</template>

<script>
  import Header from '../components/Header';
  import Presentation from '../components/Presentation';
  import Gallery from '../components/Gallery';

  export default {
    name: 'ProjectPage',
    components: {
      Header,
      Presentation,
      Gallery
    },
    props: {
      prev: String,
      next: String,
      demo: String,
      repo: String,
      name: String,
      skills: Array,
      content: Array,
      images: Array
    }
  }
</script>

<style lang="scss">
  @import "../styles/index.scss";
</style>