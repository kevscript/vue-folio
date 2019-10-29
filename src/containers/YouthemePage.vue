<template>
  <ProjectPage 
    prev="bingewatcher" 
    next="ufcify"
    demo="https://youtheme.herokuapp.com/" 
    repo="https://github.com/kevscript/youtheme" 
    name="YouTheme"
    :skills='["React", "Node", "Express", "Material-UI", "Firebase"]'
    :content='["Youtheme helps you customize your experience by allowing you to sort Youtube channels by specific themes.", "It uses Firebase for authentification and storing user data."]'
    :images="['youtheme/youtheme2.png']"
    date="Feb. 2019"
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