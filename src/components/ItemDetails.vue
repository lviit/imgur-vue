<template>
  <div class="details" @click="actions.selectImage('')">
    <div class="details__container">
      <h3 class="details__title">{{ item.title }}</h3>
      <span>{{ item.description }}</span>
      <span>{{ item.ups }}</span>
      <span>{{ item.downs }}</span>
      <span>{{ item.score }}</span>
      <img class="details__image" :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["actions", "item"],
  computed: {
    image() {
      const { is_album, images, link } = this.item;
      const url = is_album ? images.find(({ link }) => link).link : link;
      return url.replace(/(\.[\w\d_-]+)$/i, "l$1");
    }
  }
};
</script>

<style>
.details {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0,0,0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.details__container {
  flex: 0 1 400px;
  padding: 20px;
  background-color: white;
}
</style>
