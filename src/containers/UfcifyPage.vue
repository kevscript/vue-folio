<template>
  <ProjectPage 
    prev="bingewatcher" 
    next="tempeo"
    demo=""
    repo="https://github.com/kevscript/ufcify" 
    name="Ufcify"
    :skills='["React", "Redux", "Node", "Cheerio"]'
    :content='["Ufcify is an application that uses UFC data to provide you with relevant informations about the organisation and it fighters.", "Its built on an server that scrapes the data from the official api.", "This Api is unfortunately down since early 2019 :("]'
    :images="['ufcify/ufcify.png']"
    date="Dec. 2018"
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