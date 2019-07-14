<template>
  <ProjectPage 
    prev="bingewatcher" 
    next="ufcify"
    demo="https://youtheme.herokuapp.com/" 
    repo="https://github.com/kevscript/youtheme" 
    name="YouTheme"
    :skills='["React", "Node", "Express", "Material-UI", "Firebase"]'
    :content='["Youtheme helps you to customize your experience by allowing you to sort channels by specific themes.", "It uses Firebase for authentification and storing users data."]'
    :images="['youtheme/youtheme2.png']"
  />
</template>


<script>
  import ProjectPage from '../components/ProjectPage'

  export default {
    name: 'YouthemePage',
    components: {
      ProjectPage
    }
  }
</script>

<style lang="scss">
  @import "../styles/index.scss";
</style>