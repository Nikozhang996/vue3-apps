<template>
  <section class="home-header">
    <van-dropdown-menu>
      <van-dropdown-item
        :modelValue="category"
        :options="options"
        @change="handleChange"
      />
    </van-dropdown-menu>
  </section>
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
    console.log(props);
    console.log(context);

    const state = reactive({
      options: [
        { text: "全部课程", value: CATOGORY_TYPES.ALL },
        { text: "react课程", value: CATOGORY_TYPES.REACT },
        { text: "vue课程", value: CATOGORY_TYPES.VUE },
        { text: "node课程", value: CATOGORY_TYPES.NODE }
      ]
    });

    // methods
    function handleChange(value: CATOGORY_TYPES) {
      console.log(value);
      context.emit("set-current-category", value);
    }

    return {
      ...toRefs(state),
      handleChange
    };
  }
});
</script>

<style lang="scss" scoped>
.home-header {
  height: 65px;
  background: #2a2a2a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  position: fixed;
  top: 0;
  left: 0;
  width: 95%;
  img {
    height: 50px;
  }
  >>> .van-dropdown-menu__title {
    color: #fff;
  }
  >>> .van-dropdown-menu__bar {
    background: #2a2a2a;
  }
}
</style>
