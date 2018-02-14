import { configure } from "@storybook/vue";

import Vue from "vue";

function loadStories() {
  require("../src/client/stories");
}

configure(loadStories, module);
