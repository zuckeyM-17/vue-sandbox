import Vue from 'vue';
import DraggableList from './components/DraggableList.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<DraggableList />',
  components: { DraggableList },
  template: '<DraggableList></DraggableList>'
});
