<template>
  <div class="main">
    <Landing />
    <section class="info-marqee">
      <div class="info-marqee-inner">
        <h1 class="info-marqee-text">
          INFO <span>INFO</span> INFO <span>INFO</span> INFO
          <span>INFO</span> INFO <span>INFO</span>
        </h1>
      </div>
    </section>
    <Info />
    <Collections :collections="collections" />
  </div>
</template>

<style lang="scss" scope>
.info-marqee {
  width: 100%;
  padding: 15px 0 50px 0;
  overflow: hidden;

  & .info-marqee-inner {
    height: 100%;
    white-space: nowrap;

    h1 {
      font-size: 200px;
      font-family: "Open Sans", sans-serif;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #b6b6b6;
      color: #fff;
      border: none;
      display: inline-block;
      & span {
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #000;
      }
    }
  }
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Landing from "../components/Landing.vue";
import Info from "../components/Info.vue";
import Collections from "../components/Collections.vue";
export default {
  Components: { Landing, Info, Collections },
  transition: "home",
  computed: {
    collections() {
      return this.$store.state.collections;
    }
  },
  mounted() {
    //loading
    /*
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 2000);
    });*/
    this.infoTitleScroll();
  },
  methods: {
    infoTitleScroll: function() {
      this.$gsap.to(".info-marqee-text", {
        scrollTrigger: {
          scrub: 3,
          trigger: ".landing",
          start: "center center",
          end: "bottom+=800px center"
        },
        x: "-700"
      });
    }
  }
};
</script>
