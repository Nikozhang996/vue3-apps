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
import { onMounted, reactive, ref, toRef, toRefs } from "vue";

export default {
  name: "Demo",
  setup(props: any, context: any) {
    const temp = { count: 0 };

    const count = toRefs(temp);

    const el = ref(null);

    onMounted(() => {
      console.log(el.value);
    });

    return {
      el,
      count,
      handleMddClick() {
        count.count.value--;
        console.log(count.count.value);
      },
      handleAddClick() {
        count.count.value++;
        console.log(count.count.value);
      },
    };
  },
};
</script>
