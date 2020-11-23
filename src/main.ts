import { createApp } from "vue";
import App from "./App.vue";
import Demo from "./demo/index.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "./vant-variables.less";

// import axios from './plugins/axios'

createApp(Demo)
  .use(Vant)
  .use(store)
  .use(router)
  .mount("#app");
