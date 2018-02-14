import Vue from 'vue';
import Form from './components/Form.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<Form />',
  components: { Form },
  data() {
    return {
      payload: {
        message: "キー名",
        required: false,
        label: "郵便番号",
        draggable: true
      },
      styles: { width: 150 }
    };
  },
  template: '<Form :payload="payload" :styles="styles"></Form>'
});
