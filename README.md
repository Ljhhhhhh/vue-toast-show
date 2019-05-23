# vue-toast-show
基于vue的toast 插件。[git地址](https://github.com/Ljhhhhhh/vue-toast-show "vue-toast-show")

## 使用
安装:

```
npm install vue-toast-show -S
```
引入:

```javascript
import Toast from 'vue-toast-show';
import 'vue-toast-show/lib/style/index.css';
Vue.use(Toast);
```
或者使用配置

```javascript
import Toast from 'vue-toast-show';
import 'vue-toast-show/lib/style/index.css';
Vue.use(Toast, {
    type: 'info',
    duration: 3000
});
```

在组件中使用:

```javascript
<template>
  <div>
    <button @click="handleOpen1">默认提示</button>
    <button @click="handleOpen2">成功提示</button>
    <button @click="handleOpen3">设置时间</button>
    <button @click="handleOpen4">不自动关闭</button>
    <button @click="handleOpen5">设置类型</button>
    <button @click="handleOpen6">loading提示</button>
    <button @click="clear">清空提示</button>
  </div>
</template>
<script>
  export default {
    methods: {
      handleOpen1() {
        this.$toast('默认提示')
      },

      handleOpen2() {
        this.$toast.success('成功提示')
      },
      handleOpen3() {
        this.$toast('定时3秒', {
          duration: 3000,
          type: 'danger'
        })
      },
      handleOpen4() {
        this.$toast('不自动关闭', {
          duration: 0
        })
      },
      handleOpen5() {
        this.$toast('设置类型', {
          duration: '1000',
          type: 'info'
        })
      },
      handleOpen6() {
        this.$toast('loading提示', {
          type: 'loading提示'
        })
      },
      clear() {
        // 清空toast
        this.$toast.clear()
      }
    }
  }
</script>
```

## 配置

    Vue.use(Toast, [options])

- type : Toast 的类型. | String | 默认: 'primary' | 可选值 "success", "primary", "warining", "danger", "info", "loading"
- duration : Number | 默认 1500ms


## 演示
![image](https://github.com/Ljhhhhhh/vue-toast-show/blob/master/preview.gif)

## 注意事项
vue-cli3项目使用需要在vue.config.js中做以下设置：


```javascript
module.exports = {
  runtimeCompiler: true
}
```

