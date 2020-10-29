<template>
  <section class="landing" id="home">
    <div class="container">
      <div class="landing-container">
        <div class="landing-container__circle"></div>

        <div class="landing-container__inner">
          <div class="landing-container__inner--img-container">
            <img src="../assets/img/banner.webp" alt="" />
          </div>
          <div class="landing-container__inner--hellohi">
            <h1 class="landing-container__inner--hellohi__hej">
              Hej mitt namn är Alex
            </h1>
            <p class="landing-container__inner--hellohi__intro">
              Nåt litet text, vi får tänka på vad ska stå här. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Aut nisi debitis
              enim magnam distinctio eveniet laboriosam reprehenderit ratione
            </p>
            <p class="landing-container__inner--hellohi__sub">
              Vill du se mitt arbete? Tryck här, annars scrolla ner
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
    this.$gsap.registerPlugin(ScrollTrigger);
    this.landingLoadAnimation();
    this.landingScrollAnimation();
  },
  methods: {
    landingLoadAnimation: function() {
      let landingTimeline = this.$gsap.timeline();
      //if (this.$nuxt.$loading.finish()) {
      if (true) {
        landingTimeline
          .to(".landing-container__circle", {
            opacity: 1,
            duration: 0.5,
            ease: "Power0.easeInOut",
            border: "1px solid #000"
          })
          .to(".landing-container__inner--img-container img", {
            opacity: 1,
            x: 0,
            duration: 0.4
          })
          .to(
            ".landing-container__inner--hellohi",
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              ease: "Power0.easeInOut"
            },
            "-=0.4"
          );
      }
    },
    landingScrollAnimation: function() {
      this.$gsap.to(".landing-container", {
        scrollTrigger: {
          trigger: ".landing",
          scrub: 1,
          start: "center+=200px center",
          end: "bottom+=300px center"
        },
        opacity: 0
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.landing {
  width: 100%;
}
.landing-container {
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  &__circle {
    height: 800px;
    width: 800px;
    border: 5px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
  }

  &__inner {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    height: 750px;
    &--img-container {
      width: 50%;
      position: relative;
      text-align: right;
      & img {
        opacity: 0;
        max-height: 100%;
        transform: translateX(-100px);
      }
    }

    &--hellohi {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateX(150px);
      transform: translateY(-50%);
      opacity: 0;
      width: 45%;
      padding-left: 25px;
      &__hej {
        font-size: 70px;
        text-transform: uppercase;
        line-height: 1.1em;
        font-weight: 800;
        background: #fff;
      }

      &__intro {
        margin-top: 20px;
        font-size: 22px;
        font-weight: 300;
        background: #fff;
      }

      &__sub {
        margin-top: 40px;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: 300;
        background: #fff;
      }
    }
  }
}

@media screen and (max-width: 1350px) {
  .landing-container__circle {
    height: 650px;
    width: 650px;
  }

  .landing-container__inner {
    height: 600px;
    width: 100%;
    &--hellohi {
      width: 45%;
      right: 5%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .landing-container__circle {
    height: 600px;
    width: 600px;
  }

  .landing-container__inner {
    height: 550px;
    &--hellohi {
      width: 50%;
      right: 0;
      &__hej {
        font-size: 65px;
      }
      &__intro {
        font-size: 20px;
      }
      &__sub {
        font-size: 17px;
      }
    }
  }
}

@media screen and (max-width: 820px) {
  .landing {
    margin-top: 120px;
    overflow: visible;
  }
  .landing-container {
    height: auto;
    overflow: visible;
  }
  .landing-container__circle {
    width: 900px;
    height: 900px;
    top: 20%;
    transform: none;
  }
  .landing-container__inner {
    position: relative;
    text-align: center;
    transform: none;
    flex-direction: column-reverse;
    height: auto;
    width: 80%;
    margin: 0 auto;
    &--img-container {
      margin: 0 auto;
      margin-top: 50px;
      width: 100%;
      & img {
        width: 100%;
      }
    }
    &--hellohi {
      width: 100%;
      position: relative;
      top: 0;
      transform: none;
      padding: 0;

      &__intro {
        margin-top: 40px;
        display: inline-block;
      }
      &__sub {
        display: inline-block;
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .landing-container__inner {
    width: 100%;
  }
}
</style>
