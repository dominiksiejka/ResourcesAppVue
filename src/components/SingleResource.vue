<template>
  <li v-if="active">
    <base-card>
      <div class="info">
        <h2>{{ company }}</h2>
        <p>{{ text }}</p>
        <button class="link">
          <a :href="link">View Resource</a>
        </button>
      </div>
      <button class="delete" @click="handleDeleteItm(ident)">
        delete
      </button>
    </base-card>
  </li>
</template>

<script>
export default {
  inject: ["handleDeleteItm"],
  props: ["company", "text", "link", "ident", "active"],
  data() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  padding: 5px 0;
}
p {
  padding: 5px 0;
}
.link {
  border: none;
  background-color: white;
}
.link a {
  text-decoration: none;
}
.delete {
  border: none;
  padding: 6px 10px;
  text-transform: capitalize;
  font-size: 0.7rem;
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #c7c7c7;
}
</style>
