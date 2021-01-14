import { HomeState } from "../typings";
import { createStore } from "vuex";

import home from "./modules/home";

export interface GlobalState {
  home: HomeState;
}

export default createStore<GlobalState>({
  mutations: {},
  actions: {},
  modules: {
    home
  }
});
