<template>
  <section class="card">
    <slot></slot>
  </section>
</template>

<style scoped>
.card {
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.3);
  width: 90%;
  margin: 10px auto;
  padding: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;
  border-radius: 5px;
  margin-top: 20px;
  max-width: 600px;
}
@media (min-width: 750px) {
  .card {
    width: 60%;
  }
}
@media (min-width: 820px) {
  .card {
    flex-direction: row;
  }
}
</style>
