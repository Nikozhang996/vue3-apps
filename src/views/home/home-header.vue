<template>
  <van-dropdown-menu>
    <van-dropdown-item
      :modelValue="category"
      :options="options"
      @change="handleChange"
    />
  </van-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, toRefs } from "vue";
import { CATOGORY_TYPES } from "@/typings";

export default defineComponent({
  props: {
    category: {
      type: Number as PropType<CATOGORY_TYPES>,
      default: 0,
    },
  },
  emits: ["set-current-category"],
  setup(props, context) {
    console.log(props);
    console.log(context);

    const state = reactive({
      options: [
        { text: "全部课程", value: CATOGORY_TYPES.ALL },
        { text: "react课程", value: CATOGORY_TYPES.REACT },
        { text: "vue课程", value: CATOGORY_TYPES.VUE },
        { text: "node课程", value: CATOGORY_TYPES.NODE },
      ],
    });

    // methods
    function handleChange(value: CATOGORY_TYPES) {
      console.log(value);
      context.emit("set-current-category", value);
    }

    return {
      ...toRefs(state),
      handleChange,
    };
  },
});
</script>
