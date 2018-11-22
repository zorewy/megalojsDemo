<template>
  <div class="app">
    {{name}}
  </div>
</template>

<script>
export default {
  mpType: 'page',
  data() {
    return {
      name: '21113',
      names: {}
    }
  },
  created() {
    let appInstance = getApp()
    this.globalData = appInstance.globalData
    console.log(this)
  },
  methods: {
    onTouchStart(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  &__item {
    padding: 10px;
    color: blue;
  }
}
</style>
