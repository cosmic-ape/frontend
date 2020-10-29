<template>
  <header>
    <div class="header-title">
      <!--<h1 v-bind:class="{ whitewash: active }">Alex <br />Dukkee</h1> -->
      <nuxt-link to="/"
        ><h1>Alex <br />Dukkee</h1></nuxt-link
      >
    </div>

    <button
      type="button"
      class="menu"
      @click="doIt"
      v-bind:class="{ active: active }"
    >
      <div class="menu__line--1"></div>
      <div class="menu__line--2"></div>
      <div class="menu__line--3"></div>
    </button>

    <nav>
      <ul>
        <li @click="scrollTo('home')">home</li>
        <li @click="scrollTo('info')">info</li>
        <li @click="scrollTo('collections')">collections</li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
export default {
  data() {
    return {
      active: false,
      whitewash: false,
      tl: null,
      tl2: null,
      tl3: null
    };
  },
  mounted() {
    this.$gsap.registerPlugin(ScrollToPlugin);
    this.tl = this.$gsap.timeline({ paused: true }); //pause default
    this.tl2 = this.$gsap.timeline({ paused: true }); //pause default
    this.tl3 = this.$gsap.timeline({ paused: true }); //pause default

    //collapse menu
    this.tl
      .to(
        ".menu__line--1",
        0.15,
        { top: 8, ease: "Power1.easeOut" },
        ".line--1"
      )
      .to(
        ".menu__line--3",
        0.15,
        { top: -8, ease: "Power1.easeOut" },
        ".line--1"
      )

      //rotate all items
      .fromTo(
        [".menu__line--1", ".menu__line--2", ".menu__line--3"],
        0.15,
        {
          backgroundColor: "#000"
        },
        {
          rotation: -90,
          backgroundColor: "#fff",
          ease: "Power1.easeOut"
        }
      )

      //expand menu
      .to(
        ".menu__line--1",
        0.15,
        { left: 10, ease: "Power1.easeOut" },
        "line--2"
      )
      .to(
        ".menu__line--3",
        0.15,
        { right: 10, ease: "Power1.easeOut" },
        "line--2"
      );

    this.tl2.from(
      "nav ul li",
      {
        y: -40,
        opacity: 0,
        stagger: { each: 0.1, from: "top", ease: "Power0.inOut" }
      },
      0.3
    );

    this.tl3.to(
      ".header-title h1",
      {
        color: "#fff"
      },
      "+=0.1"
    );
  },
  methods: {
    doIt: function() {
      this.active = !this.active;
      if (this.active) {
        this.tl.play();
        this.tl2.play();
        if (this.$mq === "nav") {
          this.tl3.play();
        }
      } else {
        if (this.$mq === "nav") {
          this.tl3.reverse();
        }
        this.tl2.reverse();
        this.tl.reverse();
      }
    },
    scrollTo: function(page) {
      if ($nuxt.$route.name === "index") {
        this.$gsap.to(window, 0.25, {
          duration: 2,
          scrollTo: { y: "#" + page, offsetY: 0 }
        });
      } else {
        this.$router.push({ path: "/", hash: page });
      }
      this.doIt();
    }
  }
};
</script>

<style lang="scss" scope>
.whitewash {
  color: #fff;
}
header {
  font-family: "Poppins", sans-serif;
  height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  z-index: 999999;
  //background-color: #f7f3f0;
}
header a {
  text-decoration: none;
  color: #000;
}
header .header-title {
  line-height: 26px;
  text-transform: uppercase;
  z-index: 9999;

  transition: color 0.1s easeIn;
  transition-delay: 2s;

  & h1 {
    font-weight: 900;
    font-size: 18px;
    line-height: 1.1em;
    letter-spacing: -0.5px;
    z-index: 9999;
  }
}

%item {
  position: relative;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  background-color: #000;
  border-radius: 3px;
}

.menu {
  transition: transform 800ms ease 0s;

  &.active {
    & ~ nav {
      right: 0;
    }
  }
}
.menu__line--1,
.menu__line--2,
.menu__line--3 {
  @extend %item;
}

// reset button styles
button {
  border: none;
  background: none;
  outline: 0;
  position: absolute;
  right: 40px;
  z-index: 9999;
  cursor: pointer;
}
nav {
  transition: transform 800ms ease 0s;
  transition: right 800ms ease 0s;
  z-index: 9998;
  width: 600px;
  height: 100vh;
  position: fixed;
  right: -100%;
  bottom: 0;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & ul {
    list-style-type: none;
    padding: 0;

    li {
      font-size: 50px;
      margin-bottom: 15px;
      text-transform: uppercase;
      font-weight: 900;
      cursor: pointer;

      &:hover {
        color: gray;
      }
    }
  }
}
@media screen and (max-width: 1400px) {
}

@media screen and (max-width: 1024px) {
  header {
    padding: 0 20px;
    height: 60px;
  }
  button {
    right: 10px;
  }
  nav {
    width: 100%;
  }
}

@media screen and (max-width: 414px) {
  header {
    height: 50px;

    .header-title h1 {
      font-size: 15px;
    }
  }
  button {
    right: 10px;
  }
}
</style>
