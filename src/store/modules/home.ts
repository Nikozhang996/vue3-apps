import { CATOGORY_TYPES, IHomeState } from "@/typings";
import { Module } from "vuex";
import { IGlobalState } from "..";

const state: IHomeState = {
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

const home: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state,
};

export default home;
