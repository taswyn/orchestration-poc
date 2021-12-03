<script>
import importComponent from '../utils/component-router';

const Application1 = () => importComponent('http://localhost:8200/Application1.es.js');

export default {
  name: 'Application1',
  components: {
    MyComponent,
  },
  // ...
}