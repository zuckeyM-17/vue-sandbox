import Vue from "vue";

import { storiesOf } from "@storybook/vue";

import MyForm from "./../components/Form.vue";

storiesOf("Buttons", module).add("simple", () => ({
  components: { MyForm },
  data() {
    return {
      payload: {
        message: "hello",
        required: true,
        label: "郵便番号"
      },
      style: {
        width: "150px",
      }
    };
  },
  template: '<MyForm :payload="payload" :style="style"></MyForm>'
}));
