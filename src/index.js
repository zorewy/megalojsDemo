import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import VHtmlPlugin from '@megalo/vhtml-plugin'

Vue.use(Vuex)
Vue.use(VHtmlPlugin)

const store = require('./store').default
Vue.prototype.$store = store

const app = new Vue(App)

app.$mount()

export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    pages: [
      'pages/index/index',
      'pages/tab/index',
      'pages/goods/index',
      'pages/order/index',
      'pages/user/index',
      'pages/icons/index',
      'pages/cart/index'
    ],
    subPackages: [
      {
        root: 'packageOrder',
        pages: ['pages/goods/index']
      }
    ],
    tabBar: {

      color: '#333',
      backgroundColor: '#fff',
      selectedColor: '#f10',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: '/static/image/nav/home.png',
          selectedIconPath: '/static/image/nav/home-active.png'
        },
        {
          pagePath: 'pages/tab/index',
          text: 'todo',
          iconPath: '/static/image/nav/scan.png',
          selectedIconPath: '/static/image/nav/scan-active.png'
        },
        {
          pagePath: 'pages/cart/index',
          text: '购物车',
          iconPath: '/static/image/nav/store.png',
          selectedIconPath: '/static/image/nav/store-active.png'
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: '/static/image/nav/user.png',
          selectedIconPath: '/static/image/nav/user-active.png'
        }
      ]
    },
    _alipay: {
      window: {
        navigationBarTitleText: 'Alipay'
      }
    },
    _swan: {
      window: {
        navigationBarTitleText: 'Baidu'
      }
    }
  }
}
