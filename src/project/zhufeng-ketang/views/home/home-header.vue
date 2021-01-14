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
      default: 0
    }
  },
  emits: ["set-current-category"],
  setup(props, context) {
    // 建立响应式数据
    const state = reactive({
      options: [
        { text: "全部课程", value: CATOGORY_TYPES.ALL },
        { text: "react课程", value: CATOGORY_TYPES.REACT },
        { text: "vue课程", value: CATOGORY_TYPES.VUE },
        { text: "node课程", value: CATOGORY_TYPES.NODE },
        { text: "VLADIMIR", value: 4 }
      ]
    });

    // methods
    function handleChange(value: CATOGORY_TYPES) {
      context.emit("set-current-category", value);
    }

    return {
      ...toRefs(state),
      handleChange
    };
  }
});
</script>
