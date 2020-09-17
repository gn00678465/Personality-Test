<template>
  <div class="text-center px-2 py-4 md:py-8 md:px-10">
    <div class="mb-5 md:mb-10 flex justify-center">
      <h1 class="text-3xl md:text-6xl text-left leading-normal break-all inline-block
        font-medium">
        五大性格特質<br/>心理測驗
        <h2 class="text-xl md:text-2xl float-right mt-1 md:mt-3 ml-2 font-normal">
          Big Five personality<br/>traits test</h2>
      </h1>
    </div>
    <p class="text-base md:px-8 md:text-2xl lg:text-2xl mb-5 md:mb-10 leading-normal">
      五大性格特質(Big Five personality traits)在心理學中常被作為人格的評估，有時也會用來預測學業成就、
      以及作為適合職業的參考。此理論認為人的主要性格由五項人格特質組成：經驗開放性、盡責性、外向性、親和性、情緒不穩定性。</p>
    <button class="btn btn-traits w-auto" type="button"
      @click.prevent="next">開始測驗 <font-awesome-icon icon="arrow-right"/>
    </button>
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
.break-keep-all {
  word-break: keep-all;
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
