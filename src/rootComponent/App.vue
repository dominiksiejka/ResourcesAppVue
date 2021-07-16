<template>
  <the-header></the-header>
  <main-content></main-content>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import MainContent from "../components/MainContent.vue";
export default {
  components: {
    TheHeader,

    MainContent,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
}
</style>
