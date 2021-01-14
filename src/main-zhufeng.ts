import { createApp } from "vue";
import App from "./App.vue";
// import Demo from "./demo/index.vue";
import router from "./project/zhufeng-ketang/router";
import store from "./project/zhufeng-ketang/store";
import Vant from "vant";
import "vant/lib/index.css";

createApp(App)
  .use(Vant)
  .use(store)
  .use(router)
  .mount("#app");
