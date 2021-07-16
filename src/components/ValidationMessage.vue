<template>
  <modal-backdrop>
    <article>
      <p>
        All fields need to be filled properly. Company name should have at least
        <span>5 chars</span>. Description at least <span>15 chars</span>. The
        link should start with <span>https://www.</span>
      </p>
      <button @click.left="handleCloseMessage">OK</button>
    </article>
  </modal-backdrop>
</template>

<script>
export default {
  props: ["handleIsCorrect"],
  methods: {
    handleCloseMessage() {
      this.handleIsCorrect();
    },
  },
};
</script>
<style scoped>
article {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 0 0 2px 2px white;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateY(-50%);
}
p {
  background-color: crimson;
  padding: 15px 10px;
  border-radius: 5px;
  line-height: 1.5;
  border: 1px solid black;
}
button {
  padding: 10px 0;
  border-radius: 5px;
  border: 1px solid crimson;
  color: white;
  background-color: black;
  margin: 5px;
  width: 20%;
  cursor: pointer;
}
button:active {
  transform: scale(0.95);
}
span {
  color: white;
}
</style>
