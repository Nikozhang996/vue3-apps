<template>
  <div>
    <h1 ref="el">Vladimir</h1>
    <button @click="handleMddClick">
      -
    </button>
    &
    <button @click="handleAddClick">
      +
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRef, toRefs } from "vue";

export default defineComponent({
  name: "Demo",
  setup(props: any, context: any) {
    let count = 0;
    const el = ref<HTMLElement | any>(null);

    onMounted(() => {
      console.log(el.value.innerText);
    });

    return {
      el,
      count,
      handleMddClick() {
        count--;
      },
      handleAddClick() {
        count++;
      }
    };
  }
});
</script>
