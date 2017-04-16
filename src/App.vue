<template>
  <div id="app">
    <toast type="text" width="10rem" text="已喜欢" position="middle" v-model="$store.state.toast.success"></toast>
    <transition name="normally">
      <router-view></router-view>
    </transition>
    <toast type="text" width="10rem" text="取消喜欢" position="middle" v-model="$store.state.toast.cancel"></toast>
    <Tabbar class="foot">
      <tabbar-item link="/home" selected>
        <i slot="icon" class="iconfont icon-home"></i>
        <i slot="icon-active" class="iconfont icon-homefill"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/discovery">
        <i slot="icon" class="iconfont icon-search"></i>
        <span slot="label">发现</span>
      </tabbar-item>
      <tabbar-item link="/message">
        <i slot="icon" class="iconfont icon-notice"></i>
        <i slot="icon-active" class="iconfont icon-noticefill"></i>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/me">
        <i slot="icon" class="iconfont icon-my"></i>
        <i slot="icon-active" class="iconfont icon-myfill"></i>
        <span slot="label">我</span>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Cell, Toast } from 'vux'
  import myTransition from './components/myTransition/myTransition.vue'
  export default {
    name: 'app',
    components: { Tabbar, TabbarItem, Cell, Toast, myTransition }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  #app{
    width:100%;
    height:100%;
  }
  .normally-enter-active, .normally-leave-active {
    transition:all .2s ease;
  }
  .normally-enter{
    opacity:0;

  }
  .normally-leave-active{
    opacity:0;
  }
</style>
