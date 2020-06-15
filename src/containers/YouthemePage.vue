<template>
  <ProjectPage
    prev="gonerank"
    next="sniplib"
    demo="https://youtheme.herokuapp.com/"
    repo="https://github.com/kevscript/youtheme"
    name="YouTheme"
    :skills="[
      'React',
      'Node',
      'GraphQL',
      'Apollo',
      'MongoDB',
      'styled-components',
    ]"
    :content="[
      'Youtheme is a youtube subscriptions sorter, allowing you to create your own feeds by custom themes.',
      'It uses Apollo on the front and back of the application.',
    ]"
    :images="[
      'youtheme/youtheme-phone-1.png',
      'youtheme/youtheme-phone-2.png',
      'youtheme/youtheme-phone-3.png',
      'youtheme/youtheme-phone-4.png',
    ]"
    date="Jan. 2020"
    isPhone="true"
  />
</template>

<script>
import ProjectPage from "../components/ProjectPage";

export default {
  name: "YouthemePage",
  components: {
    ProjectPage,
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
</style>
