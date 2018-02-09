import { configure } from "@storybook/vue";

import Vue from "vue";

import Mybutton from "../src/components/Button.vue";

Vue.component("my-button", Mybutton);

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
