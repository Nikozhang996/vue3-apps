## vue-apps

https://gitee.com/jw-speed/zhufeng-public/tree/master/zhufeng-ketang-ts-2

https://beta.segmentfault.com/a/1190000038236423

### 疑点收集

- [x] 枚举
- [x] 元祖
- [x] 断言
- [ ] vue,vuex,vue-router 新版本各项 api
- [x] createApp，创建一个VUE应用实例，可以初始化默认全局参数
- [x] createRouter，`import { createRouter, createWebHistory } from 'vue-router'`
- [x] createWebHistory，创建一个History路由
- [x] RouteRecordRaw，`const routes: RouteRecordRaw[] = []`，定义路由Item Type
- [x] createStore，创建一个VUEX实例
- [x] useStore，创建一个已生成的store
- [x] defineComponent，defineComponent没有太多实际用途，主要是为了让TS类型提示变得友好一点。
- [ ] 新版 keep-alive
- [ ] Suspense
- [ ] template #default
- [x] reactive，创建一个响应式数据，将旧对象或数组包装返回一个被监听的类型。
- [x] shallowReactive，相比较于 reactive，shallowReactive 只监听第一层数据，深层的不进行数据监听。
- [x] ref，与 reactive 类似都是包装创建一个响应式数据，区别在于 ref 创建的值带 value 属性
- [x] shallowRef reactive 类似都是包装创建一个响应式数据，区别在于 ref 创建的值带 value 属性
- [x] toRef
- [ ] triggerRef
- [x] toRefs，对传入的对象都转化为响应式数据
- [x] toRaw，获取原始数据
- [x] markRaw，创建一个不被监听响应式的数据
- [x] provide && inject，使用方法的形式实现依赖注入
- [x] watch && watchEffect
- [x] setup 方法，初始化方法，用来实现，默认有props,context两参数
- [x] getCurrentInstance，获取当前实例
- [x] 各生命周期，新版生命周期需要先解构引入，再传入回调方式


### 收获

1. 基本类型值（String 、Nmuber 、Boolean 等）或单值对象（类似像 {count: 3} 这样只有一个属性值的对象）使用 ref
2. 引用类型值（Object 、Array）使用 reactive
3. ref 是对传入数据的拷贝；toRef 是对传入数据的引用
4. ref 的值改变会更新视图；toRef 的值改变不会更新视图
5. ref 获取 DOM 元素
