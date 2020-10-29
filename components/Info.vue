<template>
  <section class="info" id="info">
    <div class="container">
      <div class="info__inner">
        <h2 class="info-headliner">Lite info osv osv</h2>
        <div class="info__inner--container">
          <div class="info__inner--container__item">
            <h3>About work</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima id eius. Sunt exercitationem illum nihil ipsam asperiores
              suscipit dolores optio tenetur provident voluptas rem sint
              laudantium, enim corporis doloremque!
            </p>
          </div>
          <div class="info__inner--container__item">
            <h3>About me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima id eius. Sunt exercitationem illum nihil ipsam asperiores
              suscipit dolores optio tenetur provident voluptas rem sint
              laudantium, enim corporis doloremque!
            </p>
          </div>
          <div class="info__inner--container__item">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              minima id eius. Sunt exercitationem illum nihil ipsam asperiores
              suscipit dolores optio tenetur provident voluptas rem sint
              laudantium, enim corporis doloremque!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  mounted() {
    this.infoScroll();
  },
  methods: {
    infoScroll: function() {
      this.$gsap.from(".info", {
        scrollTrigger: {
          scrub: 1,
          trigger: ".landing",
          start: "bottom center"
        },
        opacity: 0
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.info-headliner {
  width: 45%;
  font-size: 60px;
  line-height: 1.1em;
  overflow: hidden;
  text-transform: uppercase;
  font-weight: 800;
}
.info {
  width: 100%;
  &__inner {
    padding: 40px 0 80 0;
    &--container {
      padding-top: 70px;
      display: flex;
      &__item {
        padding-right: 50px;
        & h3 {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }
        & p {
          padding-top: 15px;
          font-size: 15px;
          font-weight: 300;
          letter-spacing: 0.7px;
          line-height: 1.25em;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .info-headliner {
    width: 100%;
  }
  .info {
    &__inner {
      padding: 0;
      &--container {
        padding: 0;
        flex-direction: column;
        &__item {
          padding-top: 50px;
        }
      }
    }
  }
}
</style>
