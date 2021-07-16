<template>
  <modal-backdrop>
    <article>
      <p>Are you sure you wanna delete all items?</p>
      <div>
        <button @click.left="handleConfirmation">Yes</button>
        <button @click.left="handleVisibility(false)">No</button>
      </div>
    </article>
  </modal-backdrop>
</template>

<script>
export default {
  props: ["deleteAll", "handleVisibility"],
  methods: {
    handleConfirmation() {
      this.deleteAll();
      this.handleVisibility(false);
    },
  },
};
</script>
<style scoped>
article {
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  height: 150px;
  border: 1px solid black;
  box-shadow: 0 0 2px 2px white;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transform: translateY(-50%);
}
p {
  background-color: crimson;
  padding: 15px 10px;
  border-radius: 5px;
  border: 1px solid black;
}
div {
  display: flex;
  justify-content: center;
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
</style>
