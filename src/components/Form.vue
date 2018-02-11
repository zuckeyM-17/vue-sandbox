<template>
  <fieldset>
    <span>{{ payload.required ? "必須" : "任意" }}</span>
    <label>
      {{ payload.label }}
      <input
        type="text"
        v-bind:placeholder="payload.message"
      />
    </label>
  </fieldset>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: [
    "payload",
    "style"
  ],
  computed: {
  }
});
</script>

<style scoped>
fieldset {
  border: 1px solid #CCCCCC;
}

input {
  font-size: 18px;
  line-height: 1.5;
  padding: 22px 90px 5px 10px;
  border: none;
}

input:focus {
  border: none;
}

fieldset:focus {
    border: 1px solid #478cff;
}
</style>
