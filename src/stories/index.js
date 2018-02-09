import Vue from "vue";

import { storiesOf } from "@storybook/vue";

import MyButton from "./../components/Button.vue";

storiesOf("Buttons", module).add("simple", () => ({
  components: { MyButton },
  template: "<MyButton/>"
}));
