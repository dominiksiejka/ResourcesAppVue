<template>
  <header>
    <h1>ResourcesApp with Vue</h1>
    <p>the official</p>
  </header>
</template>

<style scoped>
header {
  height: 150px;
  background-color: crimson;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  text-shadow: 0 0 2px black;
  transition: 0.2s ease-out;
  font-size: 1.5rem;
}
@media (min-width: 600px) {
  h1 {
    font-size: 2rem;
  }
}
p {
  letter-spacing: 2px;
  margin-top: 5px;
}
h1:hover {
  color: black;
}
</style>
