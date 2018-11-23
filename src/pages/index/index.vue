<template>
  <div class="page-index">
    <div class="">列表</div>
    <div class="">1{{ globalData1.name }}</div>
    <div class="view-list">
      <a class="view-list-item view-list-arrow view-list-line"
         v-for="(item, index) in list"
         :key="index"
         :url="item.link">
        {{ item.text }}
      </a>
    </div>
    <div class="" v-html="testHmtl"></div>
    <HelloDemo />
  </div>
</template>

<script>
import mixins from '../../mixins'
import HelloDemo from '@/components/HelloDemo'
export default {
  mpType: 'page',
  mixins: [mixins],
  data() {
    return {
      testHmtl: '<div class="">列111表</div>',
      globalData1: { name: '21311111111111' },
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
    this.GET('api/home/index', res => {
      console.log(res)
    })
    this.globalData = appInstance.globalData
    console.log('asfd1', this.globalData.a)
    console.log(this)
  },
  beforeMount() {
    console.log('beforeMount=======')
  },
  onShow() {
    // console.log(platform)
    console.log('api')
    console.log('onShow======')
  },
  mounted() {
    console.log('mounted=======')
    console.log(this.globalData)
  },
  beforeDestroy() {
    console.log('beforeDestroy=======')
  },

  destroyed() {
    console.log('destroyed========')
  },
  onUnload() {
    console.log('onUnload======')
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
