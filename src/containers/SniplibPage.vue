<template>
  <ProjectPage :prev="this.prev" :next="this.next" :demo="this.demo" :repo="this.repo" :name="this.name"
    :skills="this.skills" :content="this.content" :images="this.images" />
</template>


<script>
  import ProjectPage from '../components/ProjectPage'

  export default {
    name: 'SniplibPage',
    components: {
      ProjectPage
    },
    data() {
      return {
        prev: "tempeo",
        next: "tripeo",
        demo: "https://sniplib.netlify.com/",
        repo: "https://github.com/kevscript/sniplib-v2",
        name: "SnipLib",
        skills: ["React", "Redux", "styled-components", "Firebase"],
        content: [
          "SnipLib is an online dashboard app that allows you to create your own snippet library.",
          "The authentification flow is handled by Firebase and the data stored in their Realtime Database."
        ],
        images: [
          'sniplib/sniplib1.jpg',
        ]
      }
    }
  }
</script>