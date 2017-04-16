<template>
  <div class="wrap">
    <x-header class="head vux-1px-b"><span slot="default">本周最热</span></x-header>
    <scroller lockY :bounce="false">
      <div class="tab">
        <tab class="tab" v-model="index">
          <tab-item selected>全部</tab-item>
          <tab-item v-for="item in selectedItems" :key="item">{{item.name}}</tab-item>
        </tab>
      </div>
    </scroller>
    <div class="scroller">
      <swiper :show-dots="false" v-model="index" :height="swiperHeight" class="swiper" :min-moving-distance="100">
        <swiper-item class="swiper-item">
          <scroller lockX scrollbarY class="scroller" height="-150px">
            <div class="abc">
              <articleLink1 v-for="n in 15" :key="n"></articleLink1>
            </div>
          </scroller>
        </swiper-item>
        <swiper-item v-for="item in selectedItems" :key="item" class="swiper-item">
          <scroller lockX scrollbarY class="scroller" height="-150px">
            <div class="abc">
              <articleLink1 v-for="n in 15" :key="n"></articleLink1>
            </div>
          </scroller>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>

<script>
  import { XHeader, Scroller, Swiper, Tab, SwiperItem, TabItem } from 'vux'
  import articleLink1 from '../articleLink1/articleLink1.vue'
  export default {
    data () {
      return {
        selectedItems: this.$store.state.selectedItems,
        index: 0,
        swiperHeight: ''
      }
    },
    components: { XHeader, Scroller, Swiper, Tab, SwiperItem, TabItem, articleLink1 },
    created () {
      this.swiperHeight = this.cHeight + 'px'
    }
  }
</script>

<style lang='less' scoped>
  .wrap{
    width:100%;
    height:100%;
    background: #fff;
    position:absolute;
    top:0;
    left:0;
    z-index:998;
    .scroller{
      z-index:-1;
      margin-top:9.5rem;

    }
    .swiper{
      position: absolute;
      top:0;
      height:100%;
      width:100%;
      z-index:-1;
    }
  }
</style>
