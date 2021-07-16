<template>
  <ul>
    <single-resource
      v-for="resource in resourceData"
      :key="resource.id"
      :ident="resource.id"
      :company="resource.company"
      :text="resource.text"
      :link="resource.link"
      :active="resource.active"
      :deleteItem="handleDeleteItem"
    ></single-resource>
  </ul>
</template>

<script>
import SingleResource from "./SingleResource.vue";
export default {
  components: {
    SingleResource,
  },
  inject: ["resourceData"],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-top: 30px;
}
</style>
