import { Module } from "vuex";
import { GlobalState } from "..";
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
    list: []
  }
};

const home: Module<HomeState, GlobalState> = {
  namespaced: true,
  state,
  mutations:{},
  actions:{},
};

export default home;
