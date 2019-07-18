import Vue from "vue";
import exampleComponent from './example.component.vue';

const vueApp = new Vue({
  el: '#vue-app',
  components: {
    'example-component': exampleComponent
  }
});

export { vueApp };
