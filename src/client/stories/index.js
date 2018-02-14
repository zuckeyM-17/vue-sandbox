import Vue from "vue";

import { storiesOf } from "@storybook/vue";

import MyForm from "./../components/Form.vue";

storiesOf("Forms", module)
  .add("required", () => ({
    components: { MyForm },
    data() {
      return {
        payload: {
          message: "キー名",
          required: true,
          label: "郵便番号",
          draggable: false
        },
        styles: { width: 150 }
      };
    },
    template: '<MyForm :payload="payload" :styles="styles"></MyForm>'
  }))
  .add("optional", () => ({
    components: { MyForm },
    data() {
      return {
        payload: {
          message: "キー名",
          required: false,
          label: "郵便番号",
          draggable: false
        },
        styles: { width: 150 }
      };
    },
    template: '<MyForm :payload="payload" :styles="styles"></MyForm>'
  }))
  .add("draggable, required", () => ({
    components: { MyForm },
    data() {
      return {
        payload: {
          message: "キー名",
          required: true,
          label: "郵便番号",
          draggable: true
        },
        styles: { width: 150 }
      };
    },
    template: '<MyForm :payload="payload" :styles="styles"></MyForm>'
  }))
  .add("draggable, optional", () => ({
    components: { MyForm },
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
    template: '<MyForm :payload="payload" :styles="styles"></MyForm>'
  }));
