<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  padding: 0 10px;
  justify-content: center;
  align-items: center;
}
</style>
