<template>
  <section>
    <template v-for="lesson in lessonList" :key="lesson.id">
      <van-card :price="lesson.price">
        <template #tags>
          <van-tag plain type="danger">
            {{ formatCategory(lesson.category) }}
          </van-tag>
        </template>
      </van-card>
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
import { Lesson } from "@/typings";

export default defineComponent({
  name: "home-list",

  props: {
    lessonList: {
      type: Array as PropType<Lesson[]>
    }
  },

  setup() {
    function formatCategory(type: number) {
      switch (type) {
        case 1: {
          return "react课程";
        }
        case 2: {
          return "vue课程";
        }
      }
    }

    return {
      formatCategory
    };
  }
});
</script>

<style scoped></style>
