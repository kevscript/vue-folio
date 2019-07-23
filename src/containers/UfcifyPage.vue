<template>
  <ProjectPage 
    prev="youtheme" 
    next="tempeo"
    demo="https://ufcify.herokuapp.com/" 
    repo="https://github.com/kevscript/ufcify" 
    name="Ufcify"
    :skills='["React", "Redux", "Node", "Cheerio"]'
    :content='["Ufcify is an application that uses UFC data to provide you with relevant informations about the organisation and it fighters.", "Its built on an server that scrapes the data from the official api."]'
    :images="['ufcify/ufcify.png']"
  />
</template>


<script>
  import ProjectPage from '../components/ProjectPage'

  export default {
    name: 'UfcifyPage',
    components: {
      ProjectPage
    }
  }
</script>

<style lang="scss">
  @import "../styles/index.scss";
</style>