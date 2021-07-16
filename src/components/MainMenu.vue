<template>
  <nav>
    <base-card>
      <div class="buttons">
        <button
          v-for="category in menuCategories"
          :key="category"
          @click.left="current(category.handler)"
          :class="handleSetActiveClass(category.handler)"
        >
          {{ category.name }}
        </button>
        <button @click.left="handleToggleModalVisibility(true)" class="trash">
          <i class="fas fa-trash"></i>
        </button>
      </div>

      <input
        @input="handleSearchResource"
        type="text"
        maxlength="30"
        placeholder="search..."
      />
    </base-card>
  </nav>
  <teleport to="body">
    <remove-confirmation
      :deleteAll="handleDeleteAll"
      :handleVisibility="handleToggleModalVisibility"
      v-if="showModal"
    ></remove-confirmation>
  </teleport>
</template>

<script>
import RemoveConfirmation from "./RemoveConfirmation.vue";

export default {
  components: {
    RemoveConfirmation,
  },
  props: ["current", "onscreen", "handleFilter", "handleDeleteAll"],
  data() {
    return {
      menuCategories: [
        { name: "stored resources", handler: "stored-resources" },
        { name: "add resource", handler: "add-resources" },
      ],
      inputVal: "",
      showModal: false,
    };
  },

  methods: {
    handleSetActiveClass(id) {
      return this.onscreen === id ? "active" : null;
    },
    handleSearchResource(event) {
      this.$emit("search-resource", event.target.value);
    },
    handleToggleModalVisibility(booleanVal) {
      this.showModal = booleanVal;
    },
  },
};
</script>

<style scoped>
nav button {
  border: none;
  padding: 6px 10px;
  background-color: white;
  text-transform: capitalize;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 2px;
}
nav input {
  border: 1px solid black;
  padding: 4px;
  border-radius: 2px;
  font-family: "Montserrat", sans-serif;
  background-color: black;
  color: white;
}
nav input::placeholder {
  color: white;
}
input:focus {
  border-color: black;
  background-color: white;
  color: black;
  outline: none;
}
button.active {
  background-color: crimson;
  color: white;
}
.trash {
  box-shadow: 2px 2px 2px 1px black;
  font-size: 1.1rem;

  transition: color 0.1s ease-out, background-color 0.1s ease-out;
}
.trash:hover {
  background-color: black;
  color: white;
}
.trash:active {
  transform: scale(0.9);
}
</style>
