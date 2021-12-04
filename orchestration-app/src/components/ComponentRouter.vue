<template>
  <div>Dynamic Component:
    <Component :is="RoutedComponent"
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
      RoutedComponent: null,
    };
  },
  watch: {
    component: {
      immediate: true,
      handler(newComponent, prevComponent = '') {
        if (newComponent.url === prevComponent.url) return;

        this.RoutedComponent = defineAsyncComponent(() => importComponent(this.component.url));
      },
    },
  },
  render () {
  
  if (!this.RoutedComponent) {
    this.RoutedComponent = defineAsyncComponent(() => importComponent(this.component.url));
  }
    return resolveDynamicCompnent('RoutedComponent')
  },
});
</script>
