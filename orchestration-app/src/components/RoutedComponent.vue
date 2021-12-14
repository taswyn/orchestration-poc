<template>
  <div>
    Dynamic Component:
    <Component :is="RoutedComponent" v-bind="props" v-bind.sync="$attrs" />
  </div>
</template>

<script>
import { defineComponent, defineAsyncComponent, resolveDynamicComponent, h } from "vue";
import importComponent from '@/utils/importComponent';

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
  render() {

    if (!this.RoutedComponent) {
      this.RoutedComponent = defineAsyncComponent(() => importComponent(this.component.url));
    }
    const resolvedComponent = resolveDynamicComponent('RoutedComponent')
    return h(resolvedComponent)
  },
});
</script>
