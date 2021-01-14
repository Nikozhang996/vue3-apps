import store, { GlobalState } from "@/store";
import { computed, onMounted, onUnmounted, Ref } from "vue";
import { Store } from "vuex";

export function useLoadMore(
  refreshElm: Ref<null | HTMLElement>,
  store: Store<GlobalState>,
  type: string
) {
  let element: HTMLElement;

  function fn() {
    // 获取可视区域高度  卷取的高度  整个高度
    /*
    let containerHeight = element.clientHeight;
    let scrollTop = element.scrollTop;
    let scrollHeight = element.scrollHeight;
    if(containerHeight + scrollTop + 20 >= scrollHeight){
        store.dispatch(type)
    }
     */
    console.log(element);
  }

  const isLoading = computed(() => {
    return store.state.home.lessons.loading;
  });

  const hasMore = computed(() => {
    return store.state.home.lessons.hasMore;
  });

  onMounted(() => {
    element = refreshElm.value as HTMLElement;
    element.addEventListener("scroll", fn);
  });

  onUnmounted(() => {
    element.removeEventListener("scroll", fn as any);
  });

  return {
    isLoading,
    hasMore
  };
}
