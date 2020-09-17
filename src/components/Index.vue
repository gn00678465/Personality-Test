<template>
  <div class="text-center">
    <div class="px-3 py-5 flex justify-center relative
      md:py-8">
      <img src="images/index.jpg" alt="" class="img">
      <h1 class="h1">
        五大性格特質<br/>心理測驗
        <h2 class="text-sm md:text-2xl float-right mt-1 md:mt-3 ml-2 font-normal">
          Big Five personality<br/>traits test</h2>
      </h1>
    </div>
    <div class="p-3 md:py-5 md:px-20">
      <p class="text-base md:text-2xl lg:text-2xl mb-5 md:mb-10 leading-normal">
      五大性格特質(Big Five personality traits)在心理學中常被作為人格的評估，有時也會用來預測學業成就、
      以及作為適合職業的參考。此理論認為人的主要性格由五項人格特質組成：經驗開放性、盡責性、外向性、親和性、情緒不穩定性。</p>
      <button class="btn btn-traits w-auto" type="button"
        @click.prevent="next">開始測驗 <font-awesome-icon icon="arrow-right"/>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    next() {
      this.$emit('next');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img {
  @apply w-full;
  @apply h-full;
  @apply absolute;
  @apply top-0;
  @apply left-0;
  @apply object-cover;
  @apply object-center;
  @apply rounded-t;
}

.h1 {
  @apply text-3xl;
  @apply text-left;
  @apply leading-normal;
  @apply break-all;
  @apply inline-block;
  @apply z-10;
  @apply font-medium;
  @apply text-traits-300;
  text-shadow: 1px 3px 5px rgba(0,0,0,0.5);
  @media (min-width: theme('screens.md')) {
    @apply text-6xl
  }
}

.btn-traits {
  @apply rounded;
  @apply bg-traits-500;
  @apply text-white;
  &:hover {
    @apply bg-traits-700;
  }
}

</style>
