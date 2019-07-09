<template>
  <div>
    <section class="header">
      <div class="header-logo">
        <img src="../assets/logo.svg" alt="">
      </div>
      <div class="header-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section class="hero">
      <div class="container">
        <h1 class="hero-title">Hello</h1>
        <h4 class="hero-subtitle">I'm Kevin, a <span>front-end</span> developer based in Paris.<br>
          Adding value through user-friendly interfaces.</h4>
      </div>
    </section>

    <section class="what">
      <div class="container">
        <h2 class="what-title">What I do</h2>
        <div class="what-content">
          <p>Front-End developer with <span>2+ years</span> of experience in web development.</p>
          <p>Proficient within the Javascript ecosystem, currently specializing in <span>React</span>.</p>
          <p>I'm able to integrate pixel perfect designs and build interactive web applications from the ground up,
            following the latest standards and technologies.</p>
          <p>Eager to improve and expand my skillset, I'm <span>looking for opportunities</span> to collaborate with other
            developers
            on
            exciting projects and share knowledge with our great community :)</p>
        </div>
        <div class="what-skills">
          <li>
            <span>Javascript</span>
            <p>React / Redux / ES6 / Node</p>
          </li>
          <li>
            <span>Markup</span>
            <p>HTML / CSS / Sass / styled-components</p>
          </li>
          <li>
            <span>Workflow</span>
            <p>Git / npm / Webpack / Jest / Enzyme</p>
          </li>
          <li>
            <span>Tooling</span>
            <p>VS Code / Adobe XD / Photoshop</p>
          </li>
        </div>
      </div>
    </section>

    <section class="projects">
      <div class="container">
        <h2 class="projects-title">Projects</h2>
        <div class="projects-list">
          <div class="project"></div>
          <div class="project"></div>
          <div class="project"></div>
          <div class="project"></div>
          <div class="project"></div>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <h2 class="faq-title">Faq</h2>
        <div class="faq-list">
          <div class="faq-item">
            <span>Q. Are you currently available?</span>
            <p>Yes, I'm currently looking for a full time position in Paris or work remotely as a Front-End / React
              developer. You can download my Resume.</p>
          </div>
          <div class="faq-item">
            <span>Q. How do I contact you?</span>
            <p>The best way of getting in touch is simply through my email. You can also message me via LinkedIn.</p>
          </div>
          <div class="faq-item">
            <span>Q. Where can I see more of your code?</span>
            <p>Yes, I'm currently looking for a full time position in Paris or work remotely as a Front-End / React
              developer. You can download my Resume.</p>
          </div>
          <div class="faq-item">
            <span>Q. What tech are you looking forward to?</span>
            <p>I'm focused on expanding my knowledge of the React ecosystem, but I'm also interested in GraphQL and
              Headless CMSs.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="footer">
      <p>kevinostafinski@gmail.com</p>
      <p>Kevin Ostafinski - Portfolio © copyright 2019</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'HomePage'
  }
</script>

<style lang="scss">
@import "../styles/index.scss";
</style>