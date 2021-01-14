import { createApp } from "vue";
import axios from "axios";
import router from "./project/zhihu/router";
import store from "./project/zhihu/store";

import App from "./project/zhihu/App.vue";
// axios.defaults.baseURL = "http://api.vikingship.xyz/";
axios.interceptors.request.use(config => {
  store.commit("setLoading", true);
  store.commit("setError", { status: false, message: "" });
  return config;
});

axios.interceptors.response.use(
  config => {
    setTimeout(() => {
      store.commit("setLoading", false);
    }, 1000);
    return config;
  },
  e => {
    const { error } = e.response.data;
    store.commit("setError", { status: true, message: error });
    store.commit("setLoading", false);
    return Promise.reject(e.response.data);
  }
);
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
