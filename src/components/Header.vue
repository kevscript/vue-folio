<template>
  <section class="header">
    <a class="header-logo" href="/">
      <img src="../assets/logo.svg" alt="">
    </a>
    <div class="header-pagination">
      <a class="pagination-prev" :href="'project/' + prev">
        <img src="../assets/arrow.svg" alt="previous project">
      </a>
      <a class="pagination-next" :href="'project/' + next">
        <img src="../assets/arrow.svg" alt="next project">
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      prev: String,
      next: String
    }
  }
</script>