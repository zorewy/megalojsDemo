<template>
  <div class="page-index">
    <div class="">列表</div>
    <div class="view-list">
      <a class="view-list-item view-list-arrow view-list-line"
         v-for="(item, index) in list"
         :key="index"
         :url="item.link">
        {{ item.text }}
      </a>
    </div>
    <HelloDemo />
  </div>
</template>

<script>
import HelloDemo from '@/components/HelloDemo'
export default {
  mpType: 'page',
  data() {
    return {
      globalData: [
        { name: '21311111111111' },
        { name: '25111' }
      ],
      list: [
        {
          link: '../../packageOrder/pages/goods/index',
          text: 'packageA-goods',
        },
        {
          link: '/pages/goods/index',
          text: 'goods',
        },
        {
          link: '/pages/icons/index',
          text: 'icons',
        }
      ],
      name: '213'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
    // 获取 onLoad 中的 options
    let appInstance = getApp()

    this.globalData = appInstance.globalData
    console.log('asfd', this.globalData.a)
    wx.setTabBarBadge({
      index: 0,
      text: `${this.globalData.a}`
    })
    console.log(this)
  },
  mounted() {
    console.log('mounted')
  },
  onPullDownRefresh() {
    //
    this.stopPullDownRefresh()
  },
  components: { HelloDemo },
  methods: {
    onTouchStart(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/index";
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
