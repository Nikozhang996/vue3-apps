import { Module } from "vuex";
import store, { GlobalState } from "..";
import * as Types from "../action-types";
import { CATOGORY_TYPES, HomeState, Lesson, Lessons, Slider } from "@/typings";

const state: HomeState = {
  currentCategory: CATOGORY_TYPES.ALL,
  sliders: [],
  lessons: {
    hasMore: true,
    loading: false,
    offset: 0,
    limit: 5,
    list: [],
  },
};

const home: Module<HomeState, GlobalState> = {
  namespaced: true,
  state,
  mutations: {
    [Types.SET_CATEGORY](state, payload: CATOGORY_TYPES) {
      state.currentCategory = payload;
    },
    [Types.SET_SLIDER_LIST](state, payload: Slider[]) {
      state.sliders = payload;
    },
    [Types.SET_LOADING](state, payload: boolean) {
      state.lessons.loading = payload;
    },
    [Types.SET_LESSON_LIST](state, payload: Lessons) {
      state.lessons.list = [...state.lessons.list, ...payload.list];
      state.lessons.hasMore = payload.hasMore;
      state.lessons.offset = state.lessons.offset + payload.list.length;
    },
  },
  actions: {
    async [Types.SET_SLIDER_LIST]({ commit }) {
      const sliders: any = [];
      commit(Types.SET_SLIDER_LIST, sliders);
      // const sliders = await getSliders<Sliders>();
    },
    async [Types.SET_LESSON_LIST]({ commit }) {
      if (state.lessons.loading === true) {
        return;
      }
      if (state.lessons.hasMore === false) {
        return;
      }

      commit(Types.SET_LOADING, true);

      const lessons: any = {
        list: [],
      };
      /* const lessons = await getLessons<lessons>(
        state.currentCategory,
        state.lessons.offset
      );
      */
      commit(Types.SET_LESSON_LIST, lessons);
      commit(Types.SET_LOADING, false);
    },
  },
};

export default home;
