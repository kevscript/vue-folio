<template>
  <ProjectPage prev="ufcify" next="gonerank" demo="https://tempeo.herokuapp.com/"
    repo="https://github.com/kevscript/tempeo" name="Tempeo" :skills='["Javascript", "ES6", "Node", "Express"]'
    :content='["Tempeo is a geo-climatic application monitoring weather around the world.", "Its built on multiple api layers. It provides an interactive map which can be used to target specific locations, and a search bar with autocompletion for cities and addresses."]'
    :images="['tempeo/tempeo.png']" date="Sept. 2018" />
</template>


<script>
  import ProjectPage from '../components/ProjectPage'

  export default {
    name: 'TempeoPage',
    components: {
      ProjectPage
    }
  }
</script>

<style lang="scss">
  @import "../styles/index.scss";
</style>