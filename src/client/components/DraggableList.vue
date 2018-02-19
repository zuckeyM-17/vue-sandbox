<template>
  <draggable
    v-model="fields"
    :options="options"
    @start="drag=true"
    @end="drag=false"
    :move="handleMove"
  >
    <Form
      v-for="field in fields"
      :key="field.id"
      :payload="field.payload"
      :styles="field.styles"
    ></Form>
  </draggable>
</template>

<script>
import Vue from "vue";
import draggable from 'vuedraggable'
import Form from "./Form.vue";

export default Vue.extend({
  components: {
    draggable,
    Form,
  },
  data() {
    return {
      fields: [
        {
          payload: { id: 1, message: "キー名", required: true, label: "1111111" },
          styles: { width: 150 }
        },
        {
          payload: { id: 2, message: "キー名", required: false, label: "2222222" },
          styles: { width: 150 }
        },
        {
          payload: { id: 3, message: "キー名", required: true, label: "3333333" },
          styles: { width: 150 }
        },
      ].map(field => { ...field, { draggable: true } }),
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
