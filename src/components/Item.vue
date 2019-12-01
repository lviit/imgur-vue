<template>
  <div>
    <h3>{{ item.title }}</h3>
    <img :src="link" />
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    // a computed getter
    link() {
      //const images = this.image.images.shift();
      const images = false;
      //console.log(this);
      return images || 'foo'
    }
  }
};
</script>
