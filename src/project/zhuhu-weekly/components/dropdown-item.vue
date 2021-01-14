<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "global-header",
  props: {
    disabled: { type: Boolean, require: true }
  }
});
</script>
<style></style>
