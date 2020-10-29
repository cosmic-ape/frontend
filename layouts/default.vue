<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true
    };
  }
};
</script>
<style>
html {
  font-family: "Playfair Display", serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-family: "Open Sans", sans-serif;
}

.container {
  margin: 0 auto;
  width: 1350px;
  overflow: hidden;
  padding: 0 25px;
}

@media screen and (max-width: 1350px) {
  .container {
    width: 1023px;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    width: 100%;
  }
}

@media screen and (max-width: 820px) {
  .container {
    width: 100%;
    padding: 0 10px;
  }
}
</style>
