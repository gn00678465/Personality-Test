<template>
  <div class="test space-y-4 md:flex md:space-y-0" ref="question" :data-category="category">
    <!-- Q -->
    <div class="test__questions">
      <p class="test__Q">Q</p>
      <p class="test__content">{{ quertion }}</p>
    </div>
    <!-- A -->
    <div class="test__options space-y-4
      md:space-y-6 lg:space-y-8">
      <div class="test__option"
        v-for="option in options" :key="option.fraction">
        <input :id="`radio${option.fraction}`" type="radio" name="radio" class="radio hidden"
          v-model="select" :value="option.fraction"/>
        <label :for="`radio${option.fraction}`" class="radio__label">
        <span class="radio__circle border-grey flex-no-shrink
          md:w-8 md:h-8"></span>
          <p class="radio__description">{{ option.description }}</p>
        </label>
        </div>
        <button type="button" class="btn btn-next" @click.prevent="next"
          :disabled="select === null">
            <span v-if="!isFinal">下一題 <font-awesome-icon icon="arrow-right"/></span>
            <span v-else>計算結果 <font-awesome-icon icon="arrow-right"/></span>
        </button>
    </div>
  </div>
</template>

<script>
import { traits, allProblems } from '@/assets/API';
import { mutations } from '@/assets/Store';

export default {
  name: 'Test',
  components: {
  },
  data() {
    return {
      select: null,
      allProblems,
      current: 0,
      isFinal: false,
      score: {},
    };
  },
  mounted() {
    traits.en.forEach((trait) => this.$set(this.score, trait, []));
  },
  methods: {
    next() {
      this.current += 1;
      const { category } = this.$refs.question.dataset;
      this.pushScore(category);
      if (this.current === this.allProblems.length - 1) {
        this.isFinal = true;
      }
      if (this.current > this.allProblems.length - 1) {
        this.current = this.allProblems.length - 1;
        mutations.setScore(this.score);
        this.$emit('next');
      }
    },
    pushScore(category) {
      this.score[category].push(this.select);
      this.select = null;
    },
  },
  computed: {
    category() {
      return allProblems[this.current].category;
    },
    quertion() {
      return allProblems[this.current].problem;
    },
    options() {
      return allProblems[this.current].options;
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  &__questions {
    @apply w-full;
    @apply p-4;
    @apply text-center;
    @apply bg-traits-300;
    @apply rounded-t;
  }
  &__Q {
    @apply font-pt;
    @apply italic;
    @apply text-5xl;
  }
  &__content {
    @apply text-xl;
    @apply leading-normal;
    @apply font-medium;
  }
  &__options {
    @apply w-full;
  }
  &__option {
    @apply items-center;
    @apply px-4;
  }
}

.radio {
  &__label {
    @apply flex;
    @apply items-center;
    @apply cursor-pointer;
    @apply text-xl;
  }
  &__circle {
    @apply w-6;
    @apply h-6;
    @apply inline-block;
    @apply mr-2;
    @apply rounded-full;
    @apply border;
  }
  &__description {
    @apply text-base;
    @apply font-light;
    @apply flex-1;
  }
  + .radio__label .radio__circle {
    transition: background .2s,
  }
  + .radio__label .radio__circle:hover,
  + .radio__label:hover .radio__circle{
    transform: scale(1.2);
  }
  &:checked + .radio__label .radio__circle {
    @apply bg-traits-500;
    box-shadow: 0px 0px 0px 2px white inset;
  }
  &:checked + .radio__label {
    @apply text-traits-500;
  }
}

.btn-next {
  @apply bg-traits-500;
  @apply w-full;
  @apply text-white;
  @apply rounded-b;
  &:not(:disabled):hover {
    @apply bg-traits-700;
  }
  &:disabled {
    @apply opacity-50;
    @apply cursor-not-allowed;
  }
}

@screen md {
  .test {
    &__questions,
    &__options {
      @apply w-1/2;
      @apply px-0;
    }
    &__questions {
      @apply text-left flex flex-row flex-wrap content-center justify-start;
      @apply py-0 pl-10;
      @apply rounded-tr-none rounded-bl;
    }
    &__Q {
      @apply text-6xl w-full;
    }
    &__content {
      @apply text-4xl;
    }
    &__options {
      @apply pt-10;
    }
    &__option {
    }
  }
  .radio {
    &__description {
      @apply text-xl;
    }
  }
  .btn {
    &-next {
      @apply rounded-br rounded-bl-none;
    }
  }
}
</style>
