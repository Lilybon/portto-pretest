<template>
  <div ref="el">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

export default defineComponent({
  name: 'InfiniteScroll',
  props: {
    rootMargin: {
      type: String,
      default: '0px 0px 60px 0px',
      required: false
    },
    threshold: {
      type: Number,
      default: 0,
      required: false
    }
  },
  emits: ['infinite'],
  setup(props, { emit }) {
    const el: Ref<HTMLElement | null> = ref(null);
    const fn = (entries: any[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          emit('infinite');
        }
      })
    }
    let observer: IntersectionObserver;

    onMounted(() => {
      nextTick(() => {
        observer = new IntersectionObserver(fn, {
          rootMargin: props.rootMargin,
          threshold: props.threshold
        });
        observer.observe(el.value as HTMLElement);
      });
    });
  
    onBeforeUnmount(() => {
      observer.unobserve(el.value as HTMLElement);
      observer.disconnect();
    });

    return {
      el
    }

  },
})
</script>