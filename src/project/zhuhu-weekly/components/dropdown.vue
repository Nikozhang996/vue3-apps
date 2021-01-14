<template>
  <div class="dropdown" :ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
  </div>
  <ul v-if="isOpen" class="dropdown-menu" :style="{ display: 'block' }">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "global-header",
  components: {},
  props: {
    title: { type: String, require: true }
  },
  setup() {
    let isOpen = reactive(false);
    const dropdownRef = ref<null | HTMLElement>(null);
    const toggleOpen = () => {
      isOpen = !isOpen;
    };

    return {
      isOpen,
      dropdownRef,
      toggleOpen
    };
  }
});
</script>
