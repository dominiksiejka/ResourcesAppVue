<template>
  <base-card>
    <section>
      <h3><span>New</span> Resource</h3>
      <form @submit.prevent="handleAddNewResource" action="#">
        <label>
          Company name:
          <input
            type="text"
            v-model="nameInputVal"
            placeholder="company..."
            maxlength="30"
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            v-model="descriptionInputVal"
            placeholder="describe it..."
            maxlength="50"
          />
        </label>
        <label>
          Link:
          <input
            type="text"
            v-model="linkInputVal"
            placeholder="link..."
            maxlength="25"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  </base-card>
  <teleport to="body">
    <validation-message
      :handleIsCorrect="handleIsCorrect"
      v-if="isSthIncorrect"
    ></validation-message>
  </teleport>
</template>

<script>
import ValidationMessage from "./ValidationMessage.vue";
export default {
  components: {
    ValidationMessage,
  },
  emits: ["new-resource"],

  data() {
    return {
      nameInputVal: "",
      descriptionInputVal: "",
      linkInputVal: "",
      nameIsCorrect: false,
      descriptionIsCorrect: false,
      linkIsCorrect: false,
      isSthIncorrect: false,
    };
  },
  methods: {
    handleAddNewResource() {
      if (this.nameInputVal.length >= 5) {
        this.nameIsCorrect = true;
      }
      if (this.descriptionInputVal.length > 15) {
        this.descriptionIsCorrect = true;
      }
      if (/^https:\/\/www./.test(this.linkInputVal)) {
        this.linkIsCorrect = true;
      }
      console.log(
        this.nameIsCorrect,
        this.descriptionIsCorrect,
        this.linkIsCorrect
      );
      if (
        this.nameIsCorrect &&
        this.descriptionIsCorrect &&
        this.linkIsCorrect
      ) {
        const newItem = {
          id: Math.floor(Math.random() * 1000),
          company: this.nameInputVal,
          text: this.descriptionInputVal,
          link: this.linkInputVal,
          active: true,
        };
        this.$emit("new-resource", newItem);
        this.nameInputVal = "";
        this.descriptionInputVal = "";
        this.linkInputVal = "";
      } else {
        this.isSthIncorrect = true;
      }
    },
    handleIsCorrect() {
      this.isSthIncorrect = false;
    },
  },
};
</script>

<style scoped>
section {
  width: 100%;
}
h3 {
  text-align: center;
  padding: 10px;
}
h3 span {
  background-color: crimson;
  padding: 4px;
  color: white;
  border-radius: 5px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
label {
  padding: 6px;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  font-weight: 700;
  width: 80%;
}
@media (min-wdth: 700px) {
  label {
    width: 60%;
  }
}
input {
  padding: 6px 8px;
  margin-top: 5px;
  font-weight: 200;
  border: none;
  background-color: #c7c7c7;
  border-radius: 2px;
  width: 100%;
}
input:focus {
  outline: none;
}
button[type="submit"] {
  padding: 6px 12px;
  border: none;
  border-radius: 2px;
  margin: 12px 0 0;
  background-color: black;
  color: white;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1.1px;
}
</style>
