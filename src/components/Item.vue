<template>
  <div class="item" @click="actions.selectImage(item.id)">
    <h3 class="item__title">{{ item.title }}</h3>
    <img class="item__image" :src="image" />
  </div>
</template>

<script>
export default {
  props: ["item", "actions"],
  computed: {
    image() {
      const { is_album, images, link } = this.item;
      const url = is_album ? images.find(({ link }) => link).link : link;
      return url.replace(/(\.[\w\d_-]+)$/i, "m$1");
    }
  }
};
</script>

<style>
.item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.item__title {
  margin: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item__image {
  min-width: 100%;
  min-height: 100%;
}
</style>
