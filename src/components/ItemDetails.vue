<template>
  <div class="details" @click="actions.selectImage('')">
    <div class="details__container">
      <img class="details__image" :alt="item.title" :src="image" />
      <div class="details__info">
        <h2 class="details__title">{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>up votes: {{ item.ups }}</p>
        <p>down votes: {{ item.downs }}</p>
        <p>score: {{ item.score }}</p>
      </div>
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.details__container {
  flex: 0 1 800px;
  padding: 20px;
  background-color: white;
  display: flex;
}
.details__image {
  margin-right: 20px;
  max-width: 50%;
}
.details__info {
  flex: 1 1 50%;
}
</style>
