<template>
  <ProjectPage
    prev="tempeo"
    next="youtheme"
    demo="https://gonerank.herokuapp.com/"
    repo="https://github.com/kevscript/gonerank"
    name="GoneRank"
    :skills="[
      'React',
      'Node',
      'GraphQL',
      'Apollo',
      'MongoDB',
      'styled-components',
    ]"
    :content="[
      'GoneRank is a platform tailored for OL fans that want to evaluate the performances of their players throughout the season.',
      'It allows them to submit their ratings for each match and monitor the rankings.',
    ]"
    :images="['gonerank/gonerank1.jpg', 'gonerank/gonerank2.jpg']"
    date="Apr. 2020"
  />
</template>

<script>
import ProjectPage from "../components/ProjectPage";

export default {
  name: "GonerankPage",
  components: {
    ProjectPage,
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
</style>
