<template>
  <section class="collections" id="collections">
    <div class="container">
      <div class="collections__container">
        <div
          class="collections__container--item"
          v-for="collection in collections"
          :key="collection.id"
        >
          <nuxt-link
            :to="'collections/' + collection.slug"
            class="collections__container--item__overlay"
            :id="'collection-' + collection.id"
          >
            <h3>{{ collection.title }}</h3>
            <p>
              {{ collection.shortDescription }}
            </p>
          </nuxt-link>
          <div
            class="collections__container--item__img"
            v-bind:style="{
              background: 'url(' + collection.gallery[0][0] + ')',
              backgroundSize: 'cover'
            }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: "Collections",
  transition: "page",
  props: { collections: Array },
  data() {
    return {
      hover: false
    };
  },
  mounted() {
    this.collectionsScroll();
  },
  methods: {
    collectionsScroll: function() {
      this.$gsap.from(".collections", {
        scrollTrigger: {
          scrub: 1,
          trigger: ".info-marqee",
          start: "bottom center"
        },
        opacity: 0
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.collections {
  padding: 80px 0;

  &__container {
    display: grid;
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
    grid-row-gap: 10px;
    grid-column-gap: 10px;

    &--item {
      height: 450px;
      position: relative;
      overflow: hidden;

      &:hover > &__overlay {
        opacity: 1;
      }

      &:hover > &__overlay h3,
      &:hover > &__overlay p {
        opacity: 1;
        transform: none;
      }

      &__img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 998;
      }
      &__overlay {
        position: absolute;
        text-decoration: none;
        top: 0;
        z-index: 999;
        background: rgba(0, 0, 0, 0.95);
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 50px;
        opacity: 0;
        transition: opacity 0.15s ease-in-out;

        & h3,
        p {
          position: relative;
          font-family: "Open Sans", sans-serif;
          transform: translate3d(0, 40px, 0) skewY(-10deg);
          pointer-events: none;
          box-sizing: border-box;
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.22, 0.48, 0.06, 0.98),
            opacity 0.4s ease-in;

          color: rgba(255, 255, 255, 0.9);
        }

        & h3 {
          text-transform: uppercase;
          font-weight: 900;
          font-size: 20px;
          letter-spacing: -0.5px;
        }

        & p {
          font-size: 12px;
          font-weight: 400;
        }
      }
    }
  }
}
@media screen and (max-width: 1350px) {
  .collections__container {
    &--item {
      height: 350px;
    }
  }
}

@media screen and (max-width: 850px) {
  .collections__container {
    grid-template-columns: 50% 50%;
    &--item {
      height: 400px;
    }
  }
}

@media screen and (max-width: 675px) {
  .collections__container {
    &--item {
      height: 350px;
    }
  }
}

@media screen and (max-width: 590px) {
  .collections__container {
    grid-template-columns: 100%;
    &--item {
      height: 450px;
    }
  }
}
</style>
