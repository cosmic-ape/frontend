<template>
  <div class="error">
    <h1>Ajdå, nånting gick fel :,(</h1>

    <NuxtLink to="/">Gå tillbaka till startsidan</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error" // you can set a custom layout for the error page
};
</script>

<style lang="scss" scoped>
.error {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 64px;
  }
  & a {
    margin-top: 15px;
    text-decoration: none;
    color: #000;
    border-bottom: 1px solid black;
    font-size: 18px;
  }
}
</style>
