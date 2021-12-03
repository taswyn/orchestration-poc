<template>
  <div>Dynamic Component:
    <Component :is="computedComponent"
  v-bind="props" />
  </div>
</template>

<script>
import importComponent from '../utils/importComponent';

export default {
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

        this.computedComponent = () => importComponent(this.component.url);
      },
    },
  },
};
</script>
