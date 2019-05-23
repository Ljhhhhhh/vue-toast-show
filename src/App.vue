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
        this.$toast('提示3秒', {
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
          duration: '3000',
          type: 'info'
        })
      },
      handleOpen6() {
        this.$toast('loading提示', {
          duration: '3000',
          type: 'loading'
        })
      },
      clear() {
        this.$toast.clear()
      }
    }
  }
</script>