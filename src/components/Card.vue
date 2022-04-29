<template>
  <a-card hoverable style="width: 240px; margin: 0 20px">
    <img slot="cover" alt="example" style="height: 320px" :src="image" />

    <a-card-meta :title="title">
      <template slot="description"> {{ price }} </template>
    </a-card-meta>
  </a-card>
</template>

<script>
export default {
  name: "Card",
  props: ["image", "title", "price"],
};
</script>
