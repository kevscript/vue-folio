<template>
  <section class="gallery">
    <div class="gallery-list">
      <div
        :class="isPhone ? `item-container-phone` : `item-container`"
        v-for="(image, index) in images"
        :key="index"
      >
        <div class="gallery-item">
          <img :src="require(`@/assets/${image}`)" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: Array,
    isPhone: Boolean
  },
};
</script>
