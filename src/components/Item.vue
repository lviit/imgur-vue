<template>
  <div class="item">
    <h3 class="item__title">{{ item.title }}</h3>
    <img class="item__image" :src="image" />
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    image() {
      const url = this.item.is_album ? this.item.images.shift().link : this.item.link;
      return url.replace(/(\.[\w\d_-]+)$/i, 'm$1');;
    }
  }
};
</script>

<style>
.item {
  position: relative;
  overflow: hidden;
}
.item__title {
  margin: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  color: white;
  background-color: rgba(0,0,0, 0.5);
}
.item__image {
  width: 100%;
}
</style>
