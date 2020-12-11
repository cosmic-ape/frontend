<template>
  <section class="single-collection">
    <div class="container">
      <div class="single-collection-container">
        <div class="single-collection-container__back-link">
          <nuxt-link exact to="/">⟵ Back to Home</nuxt-link>
        </div>
        <div class="single-collection-container__info">
          <h1 class="single-collection-title">{{ collection.title }}</h1>
          <p class="single-collection-description">
            {{ collection.description }}
          </p>
          <p class="single-collection-material">
            <span>Material:</span> Some material
          </p>
          <p class="single-collection-sizes">
            <span>Sizes:</span> 40x60, 90*40, 100x80
          </p>
        </div>
        <div class="single-collection-container__gallery">
          <img
            v-for="item in collection.gallery"
            :key="item.id"
            :src="item[0]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.single-collection {
  padding-top: 150px;
}
.single-collection-container {
  width: 100;
  display: flex;
  flex-direction: column;
  &__back-link {
    width: 100;
    & a {
      text-decoration: none;
      color: #000;
      font-size: 14px;
      font-weight: 900;
      letter-spacing: -0.5px;
      text-transform: uppercase;
    }
  }
  &__info {
    padding-top: 70px;
    & .single-collection-title {
      font-size: 50px;
      text-transform: uppercase;
      font-weight: 900;
    }
    & .single-collection-description {
      padding-top: 10px;
    }
    & .single-collection-material,
    & .single-collection-sizes {
      padding-top: 20px;

      & span {
        font-weight: 800;
      }
    }
  }

  &__gallery {
    width: 100%;
    padding-top: 50px;

    & img {
      max-width: 100%;
      padding-top: 20px;
    }
  }
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  transition: "page",
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  mounted() {
    //loading
    /*this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
    */
  },
  computed: {
    collection() {
      let collection = this.$store.state.collections.filter(
        el => el.slug === this.slug
      );
      if (collection[0] == undefined) {
        this.$router.push("/error");
        return;
      }
      return collection[0];
    }
  },
  head() {
    return {
      title: this.collection.title
    };
  }
};
</script>
