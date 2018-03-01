<template>
  <fieldset v-bind:style="{ width: styles.width + 'px' }">
    <span
      v-if="payload.draggable"
      class="drag-handler"
    >
      <i class="fas fa-arrows-alt"></i>
    </span>
    <span
      class="requirement-label"
      v-bind:style="{
        backgroundColor: (payload.required ? '#eed3d7' : '#d6e9c6'),
        left: (payload.draggable ? '20px' : '2px')
      }"
    >{{ payload.required ? "必須" : "任意" }}</span>
    <label
      v-bind:style="{ left: payload.draggable ? '55px' : '35px' }"  
    >{{ payload.label }}</label>
    <input
      type="text"
      v-bind:placeholder="payload.message"
    />
  </fieldset>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ["payload", "styles"],
  computed: {}
});
</script>

<style scoped>
.drag-handler {
  position: absolute;
  left: 3px;
  top: 5px;
}

.drag-handler:hover {
  cursor: pointer;
}

.requirement-label {
  color: #ffffff;
  position: absolute;
  top: 2px;
  left: 2px;
  padding: 1px 2px 1px 2px;
}

label {
  position: absolute;
  top: 2px;
  left: 35px;
}

fieldset {
  margin: 2px;
  border: 1px solid #cccccc;
  font-size: 12px;
  position: relative;
}

input {
  font-size: 18px;
  line-height: 1.5;
  padding: 25px 0px 5px 10px;
  width: 90%;
  border: none;
  background-color: #ffffff;
  outline: none;
}

input:focus {
  border: none;
}

fieldset:focus {
  border: 1px solid #478cff;
}
</style>
