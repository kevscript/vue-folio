<template>
  <ProjectPage :prev="this.prev" :next="this.next" :demo="this.demo" :repo="this.repo" :name="this.name"
    :skills="this.skills" :content="this.content" :images="this.images" />
</template>


<script>
  import ProjectPage from '../components/ProjectPage'

  export default {
    name: 'TripeoPage',
    components: {
      ProjectPage
    },
    data() {
      return {
        prev: "sniplib",
        next: "bingewatcher",
        demo: "https://tripeo.herokuapp.com/",
        repo: "https://github.com/kevscript/tripeo",
        name: "Tripeo",
        skills: ["React", "Redux", "styled-components", "Node", "Jest", "Enzyme"],
        content: [
          "Tripeo is a mobile friendly application that helps you anticipate weather along your trips.",
          "You create a day-by-day roadmap of your journey, and the app takes care of the rest."
        ],
        images: [
          'tripeo/tripeo2.png',
          'tripeo/tripeo3.png',
          'tripeo/tripeo4.png'
        ]
      }
    }
  }
</script>