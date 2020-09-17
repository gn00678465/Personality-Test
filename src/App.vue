<template>
  <div id="app" class="w-full h-screen flex justify-center items-center">
    <div class="app container">
      <transition name="fade" mode="out-in">
        <component :is="componentId" @next="next"/>
      </transition>
    </div>
  </div>
</template>

<script>
import { URL, dataHandler } from '@/assets/API';

export default {
  name: 'App',
  data() {
    return {
      current: 1,
    };
  },
  components: {
    Index: () => import('./components/Index.vue'),
    Test: () => import('./components/Test.vue'),
    Final: () => import('./components/Final.vue'),
  },
  created() {
    this.$http.get(URL)
      .then((res) => {
        dataHandler(res.data);
      });
  },
  methods: {
    next() {
      if (this.current > 3) {
        this.current = 1;
      }
      this.current += 1;
    },
  },
  computed: {
    componentId() {
      if (this.current === 2) {
        return 'Test';
      }
      if (this.current === 3) {
        return 'Final';
      }
      return 'Index';
    },
  },
};
</script>

<style lang="scss">

#app {
  background: #eee;
  @apply font-noto;
  @apply box-border;
}
.app {
  // @apply max-w-screen-lg;
  @apply mx-4;
  @apply rounded;
  @apply shadow-lg;
  @apply bg-white;
}

.btn {
  @apply font-normal;
  @apply py-2;
  @apply px-5;
  @apply text-xl;
}

@screen md {
  .btn {
  @apply py-3 px-8 text-2xl;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
