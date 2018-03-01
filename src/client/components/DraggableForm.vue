<template>
  <draggable
    v-model="forms"
    :options="options"
    @start="drag=true"
    @end="drag=true"
  >
    <my-form
      v-for="form in forms"
      :key="form.id"
      :payload="form.payload"
      :styles="form.styles"
    ></my-form>
  </draggable>
</template>

<script>
import Vue from "vue";
import draggable from 'vuedraggable';
import MyForm from './Form.vue';

export default Vue.extend({
  components: {
    draggable,
    MyForm,
  },
  props: ["fields"],
  data() {
    return {
      forms: this.fields.map(field => Object.assign(field, {
      payload: {
        draggable: true,
        ...field.payload
      }
    })),
      options: {
        handle: '.drag-handler',
        group: 'forms',
        animation: 100,
      }
    };
  },
});

</script>

