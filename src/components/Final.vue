<template>
  <div class="">
    <div v-swiper:scoreSwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(name, i) in names" :key="i">
          <!-- description -->
          <div class="banner px-4 py-4 h-64 md:flex md:items-end md:px-8">
            <img src="../assets/final-bg.jpg" alt="" class="banner-img">
            <div>
              <p class="title text-center md:text-left">{{ traits.zh[i] }}</p>
              <p class="text-xl font-medium">{{ name }} </p>
            </div>
            <p class="text-base mt-1 font-thin
              md:w-1/2 md:ml-10 md:mt-0 md:font-normal
              lg:w-2/5">
            {{ allDescription[name].desc }}</p>
          </div>
          <!-- score -->
          <div class="px-4 py-4 md:px-8">
            <div class="" v-if="score[name] === 'middle'">
              <h2 class="title md:mt-8">中</h2>
              <ul class="mt-1 md:w-9/12">
                <li class="text-xl md:text-2xl">{{ allDescription[name].middle }}</li>
                <li class="flex space-x-2 mt-4 md:mt-8">
                  <span class="font-semibold">高</span>
                  <span> —— </span>
                  <p class="inline font-light">{{ allDescription[name].high }}</p>
                </li>
                <li class="flex space-x-2 mt-2 md:mt-4">
                  <span class="font-semibold">低</span>
                  <span> —— </span>
                  <p class="inline font-light">{{ allDescription[name].low }}</p>
                </li>
              </ul>
            </div>
            <div class="md:my-8" v-if="score[name] === 'high'">
              <h2 class="title">高</h2>
              <p class="mt-1 font-light md:mt-4 md:font-normal md:text-2xl md:w-9/12">
                {{ allDescription[name].high }}</p>
            </div>
            <div class="md:my-8" v-if="score[name] === 'low'">
              <h2 class="title">低</h2>
              <p class="mt-1 font-light md:mt-4 md:font-normal md:text-2xl md:w-9/12">
                {{ allDescription[name].low }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="trait-pagination space-x-12"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import { store } from '@/assets/Store';
import { traits, allDescription } from '@/assets/API';

export default {
  name: 'Final',
  components: {},
  data() {
    return {
      allDescription,
      traits,
      swiperOption: {
        speed: 500,
        pagination: {
          el: '.trait-pagination',
          clickable: true,
          bulletClass: 'trait-bullet',
          bulletActiveClass: 'trait-bullet-active',
          renderBullet(index, className) {
            return `<span class="${className}">${traits.zh[index]}</span>`;
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  methods: {
    degree(scope) {
      if (scope > 7) {
        return 'high';
      }
      if (scope < 5) {
        return 'low';
      }
      return 'middle';
    },
  },
  computed: {
    score() {
      const score = {};
      Object.keys(store.score).forEach((item) => {
        const scope = store.score[item].reduce((prev, curr) => prev + curr, 0);
        score[item] = this.degree(scope);
      });
      return score;
    },
    names() {
      return traits.en;
    },
    description() {
      const description = {};
      return description;
    },
  },
};
</script>

<style lang="scss">
.swiper-container{
  --swiper-theme-color: #fff;
  --swiper-navigation-size: 25px;
}
.swiper-button-prev,
.swiper-button-next {
  outline: none;
  top: 5%;
}

.title {
  @apply text-4xl;
  @apply font-semibold;
}
.banner {
  @apply  text-white;
  @apply relative;
  &-img {
    @apply w-full;
    @apply h-full;
    @apply absolute;
    @apply top-0;
    @apply right-0;
    @apply object-cover;
    z-index: -1;
  }
}

.trait-pagination {
  @apply hidden;
}

@screen md {
  .title {
    @apply text-5xl font-normal;
  }
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .trait-pagination {
    @apply block;
    @apply absolute top-0 left-0 z-10 text-right pr-12;
    @apply pt-6 w-full text-white;
  }
  .trait-bullet {
    @apply pb-1;
    &-active {
      @apply border-b-4 border-traits-500 border-solid;
    }
  }
}
</style>
