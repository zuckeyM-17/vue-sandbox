import Vue from 'vue';
import DraggableForm from './components/DraggableForm.vue';

Vue.config.productionTip = false;

const fields1 = [
  {
    payload: { id: 1, message: "キー名", required: true, label: "1111111" },
    styles: { width: 200 }
  },
  {
    payload: { id: 2, message: "キー名", required: false, label: "2222222" },
    styles: { width: 200 }
  },
  {
    payload: { id: 3, message: "キー名", required: true, label: "3333333" },
    styles: { width: 200 }
  },
];

const fields2 = [
  {
    payload: { id: 4, message: "キー名", required: true, label: "1111111" },
    styles: { width: 200 }
  },
  {
    payload: { id: 5, message: "キー名", required: false, label: "2222222" },
    styles: { width: 200 }
  },
  {
    payload: { id: 6, message: "キー名", required: true, label: "3333333" },
    styles: { width: 200 }
  },
];


const app = new Vue({
  el: '#app',
  data: {
      fields1: fields1,
      fields2: fields2,
  },
  components: { DraggableForm },
  template: '<div style="display: flex;">\
    <DraggableForm :fields="fields1"></DraggableForm>\
    <DraggableForm :fields="fields2"></DraggableForm>\
  </div>'
});

