<template>
  <div>
    <div class="container">
      <section class="header">
        <div class="header-logo">
          <img src="../assets/logo.svg" alt="">
        </div>
        <div class="header-menu">
          <router-link to="projects/youtheme" class="header-link">Projects</router-link>
          <a href="./resume.pdf" download="Kevin Ostafinski - CV Front-End Developer" class="header-anchor">
            Resume
            <img src="../assets/download.svg" alt="">
          </a>
        </div>
      </section>

      <section class="hero">
        <h1 class="hero-title">Hello</h1>
        <h4 class="hero-subtitle">I'm Kevin, a <span>front-end</span> developer based in Paris.<br>
          Adding value through user-friendly interfaces.</h4>
      </section>

      <section class="what">
        <div class="what-flex">
          <div class="what-content">
            <h2 class="what-title">What I do</h2>
            <p>Front-End developer proficient with the Javascript ecosystem, currently specializing in
              <span>React</span>.</p>
            <p>I'm able to integrate pixel perfect designs and build interactive web applications from the ground up,
              following the latest standards and technologies.</p>
            <p>Eager to improve and expand my skillset, I'm <span>looking for opportunities</span> to collaborate with
              other
              developers
              on
              exciting projects and share knowledge with the community.</p>
          </div>
          <div class="what-skills">
            <li>
              <span>Frontend</span>
              <p>React / ES6 / Vue</p>
            </li>
            <li>
              <span>Backend</span>
              <p>Node</p>
            </li>
            <li>
              <span>State Management</span>
              <p>Redux / Hooks / Apollo</p>
            </li>
            <li>
              <span>Styling</span>
              <p>CSS / Sass / styled-components</p>
            </li>
            <li>
              <span>Testing</span>
              <p>Jest / Enzyme / Testing-Library</p>
            </li>
            <li>
              <span>Data</span>
              <p>GraphQL / MongoDB</p>
            </li>
            <li>
              <span>Workflow</span>
              <p>Git / npm / webpack</p>
            </li>
            <li>
              <span>Prototyping</span>
              <p>Adobe XD / Photoshop</p>
            </li>
          </div>
        </div>
      </section>

      <section class="projects">
        <h2 class="projects-title">Projects</h2>
        <div class="projects-container">
          <router-link to="/projects/youtheme" class="project">
            <div class="mask">
              <h3>Youtheme</h3>
              <span>Jan. 2020</span>
            </div>
            <img src="../assets/youtheme/youtheme.jpg" alt="">
          </router-link>
          <router-link to="/projects/sniplib" class="project">
            <div class="mask">
              <h3>SnipLib</h3>
              <span>Sept. 2019</span>
            </div>
            <img src="../assets/sniplib/sniplib1.jpg" alt="">
          </router-link>
          <router-link to="/projects/tripeo" class="project">
            <div class="mask">
              <h3>Tripeo</h3>
              <span>Jun. 2019</span>
            </div>
            <img src="../assets/tripeo/tripeo4.png" alt="">
          </router-link>
          <router-link to="projects/bingewatcher" class="project">
            <div class="mask">
              <h3>BingeWatcher</h3>
              <span>Apr. 2019</span>
            </div>
            <img src="../assets/binge/binge1.png" alt="">
          </router-link>
          <router-link to="/projects/ufcify" class="project">
            <div class="mask">
              <h3>Ufcify</h3>
              <span>Dec. 2018</span>
            </div>
            <img src="../assets/ufcify/ufcify.png" alt="">
          </router-link>
          <router-link to="/projects/tempeo" class="project">
            <div class="mask">
              <h3>Tempeo</h3>
              <span>Sept. 2018</span>
            </div>
            <img src="../assets/tempeo/tempeo.png" alt="">
          </router-link>
        </div>

      </section>

      <section class="faq">
        <h2 class="faq-title">Faq</h2>
        <div class="faq-list">
          <div class="faq-item">
            <span>Q. Are you currently available?</span>
            <p>Yes, I'm currently looking for a full time position in Paris or work remotely as a Front-End / React
              developer. You can download my <a href="./resume.pdf"
                download="Kevin Ostafinski - CV Front-End Developer">Resume</a>.</p>
          </div>
          <div class="faq-item">
            <span>Q. How do I contact you?</span>
            <p>The best way of getting in touch is simply through my <a
                href="mailto:kevinostafinski@gmail.com">email</a>. You can also message me via <a
                href="https://www.linkedin.com/in/kevinostafinski/" target="_blank" rel="noopener">LinkedIn</a>.</p>
          </div>
          <div class="faq-item">
            <span>Q. Where can I see more of your code?</span>
            <p>Most of my public projects are available for you on my <a href="https://github.com/kevscript"
                target="_blank" rel="noopener">Github</a> profile.</p>
          </div>
          <div class="faq-item">
            <span>Q. What other tech do you want to learn next?</span>
            <p>I'm focused on expanding my knowledge of the React ecosystem, but I'd like to explore Vue, GraphQL and
              Headless CMSs in the near future.</p>
          </div>
        </div>
      </section>
      <section class="footer">
        <p id="footer-1">kevinostafinski@gmail.com</p>
        <p id="footer-2">Kevin Ostafinski - Portfolio</p>
        <p id="footer-3">made with <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue</a> :)</p>
      </section>
    </div>
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