import { CATOGORY_TYPES, HomeState } from "@/typings";
import { Module } from "vuex";
import { GlobalState } from "..";

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
};

export default home;
