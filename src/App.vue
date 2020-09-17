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
@import './assets/css/_btn.scss';

#app {
  background-image: url('https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  @apply bg-center;
  @apply bg-no-repeat;
  @apply bg-cover;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
