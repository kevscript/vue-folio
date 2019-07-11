<template>
  <section class="header-project">
    <router-link to="/" class="header-logo">
      <img src="../assets/logo.svg" alt="">
    </router-link>
    <div class="header-pagination">
      <router-link :to="prev" class="pagination-prev">
        <img src="../assets/arrow.svg" alt="previous project">
      </router-link>
      <router-link :to="next" class="pagination-next">
        <img src="../assets/arrow.svg" alt="next project">
      </router-link>
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