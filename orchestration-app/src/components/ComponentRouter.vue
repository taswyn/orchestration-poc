<template>
  <div>Dynamic Component:
    <Component :is="computedComponent"
  v-bind="props" />
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, h } from "vue";
import importComponent from '../utils/importComponent';

export default defineComponent({
  name: 'RoutedComponent',
  props: {
    component: {
      required: true,
      type: Object,
    },
    props: {
      default: () => ({}),
      type: Object,
    },
  },
  data() {
    return {
      computedComponent: null,
    };
  },
  watch: {
    component: {
      immediate: true,
      handler(newComponent, prevComponent = '') {
        if (newComponent.url === prevComponent.url) return;

        this.computedComponent = defineAsyncComponent(() => importComponent(this.component.url));
      },
    },
  },
  render () {
  
  if (!this.computedComponent) {
    this.computedComponent = defineAsyncComponent(() => importComponent(this.component.url));
  }
    return h(this.computedComponent)
  },
});
</script>
