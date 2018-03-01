<template>
  <draggable
    v-model="fields"
    :options="options"
    @start="drag=true"
    @end="drag=false"
    :move="handleMove"
  >
    <my-form
      v-for="field in fields"
      :key="field.id"
      :payload="field.payload"
      :styles="field.styles"
    ></my-form>
  </draggable>
</template>

<script>
import Vue from "vue";
import draggable from 'vuedraggable'
import MyForm from "./Form.vue";

export default Vue.extend({
  components: {
    draggable,
    MyForm,
  },
  data() {
    return {
      fields: [
        {
          payload: { id: 1, message: "キー名", required: true, label: "1111111", draggable: true },
          styles: { width: 200 }
        },
        {
          payload: { id: 2, message: "キー名", required: false, label: "2222222", draggable: true },
          styles: { width: 200 }
        },
        {
          payload: { id: 3, message: "キー名", required: true, label: "3333333", draggable: true },
          styles: { width: 200 }
        },
      ],
      options: { handle: '.drag-handler' }
    };
  },
  methods: {
    handleMove: e => {
      console.log(e);
    }
  },
  computed: {}
});

</script>
