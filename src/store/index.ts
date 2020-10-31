import { IHomeState } from "@/typings";
import { createStore } from "vuex";

import home from "./modules/home";

export interface IGlobalState {
  home: IHomeState;
}

export default createStore<IGlobalState>({
  mutations: {},
  actions: {},
  modules: {
    home,
  },
});
