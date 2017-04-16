<template>
  <div class="home">
    <div class="head vux-1px-b">
      <div class="blur"></div>
      <scroller lockY :bounce=false class="tabScroller">
        <div>
          <tab v-bind:style="{width: tabWidth+'px'}" v-model="index" class="tab">
            <tab-item selected class="tabItem">首页</tab-item>
            <tab-item v-if="item.selected" v-for="(item,index) in $store.state.selectedItems" :key="item.name"
                      class="tabItem">{{ item.name
              }}</tab-item>
          </tab>
        </div>
      </scroller>
      <router-link to="/home/selectBar">
        <i class="selected-icon iconfont icon-apps"></i>
      </router-link>
    </div>
    <myTransition>
      <router-view></router-view>
    </myTransition>
    <swiper :height="swiperHeight" :show-dots="false" class="swiper" v-model="index" :min-moving-distance="100">
      <swiper-item>
        <articleList dataTitle="首页"></articleList>
      </swiper-item>
      <swiper-item v-if="item.selected" v-for="(item,index) in $store.state.selectedItems" :key="index">
        <articleList :data-title="item.name"></articleList>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Tab, TabItem, Swiper, SwiperItem, XHeader, Scroller } from 'vux'
  import articleList from '../articleList/articleList.vue'
  import myTransition from '../myTransition/myTransition.vue'
  export default {
    data () {
      return {
        selectedItems: this.$store.state.selectedItems,
        swiperHeight: '',
        index: 0
      }
    },
    methods: {
      getTabWidth () {
        let sum = 0
        let i = 0
        let max = (sum + 1) * 60
        while (i < 8) {
          if (this.$store.state.selectedItems[i].selected) {
            sum++
          }
          i++
        }
        max = (sum + 1) * 60
        return max
      }
    },
    computed: {
      tabWidth: function () {
        return this.getTabWidth()
      }
    },
    created () {
      this.getTabWidth()
      this.swiperHeight = this.cHeight + 'px'
    },
    components: { Tab, TabItem, Swiper, SwiperItem, XHeader, Scroller, articleList, myTransition }
  }
</script>

<style lang='less' scoped>
  .home{
    width:100%;
    height:100%;
    .slider-enter-active, .slider-leave-active {
      transition:all .3s ease;
    }
    .slider-enter, .slider-leave-active {
      top:0;
      left: 100%;
    }
  }
  .swiper{
    position:absolute !important;
    top:0;
    left:0;
    width:100%;
    z-index:10
  }
  .head{
    background: #fff;
    position: relative;
    .tab{
      height:50px;
      max-width:80%;
      line-height:80px;
      float:left;
      .tabItem{
        font-size: 1.6rem !important;
      }
    }
    .selected-icon{
      position:absolute;
      top:50%;
      transform:translateY(-50%);
      right:20px;
      font-size: 20px;
      color:#ccc;
    }
    .tabScroller{
      width:80%;
    }
  }

</style>
