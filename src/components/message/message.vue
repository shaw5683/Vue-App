<template>
  <div class="contain">
    <div class="head">
      <tab v-model="index" class="head">
        <tab-item selected>消息</tab-item>
        <tab-item>动态</tab-item>
      </tab>
    </div>
    <swiper :height="swiperHeight" class="swiper" v-model="index" :min-moving-distance="100">
      <swiper-item class="swiper-item">
        <div class="bg">
          <div class="icon">
            <i class="iconfont icon-mail tColor"></i>
          </div>
          <div class="text">
            还没有消息哦<br>到评论区和小伙伴们互动起来吧！
          </div>
        </div>
      </swiper-item>
      <swiper-item class="swiper-item">
        <div class="dynamic-list">
          <scroller lockX scrollbarY height="-105px" class="scroller">
            <div>
              <dynamicItem v-for="n in 15" :key="n"></dynamicItem>
            </div>
          </scroller>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, Tab, Scroller, TabItem, SwiperItem } from 'vux'
  import dynamicItem from '../dynamicItem/dynamicItem.vue'
  export default {
    data () {
      return {
        index: 0,
        swiperHeight: ''
      }
    },
    components: { Swiper, Tab, Scroller, TabItem, SwiperItem, dynamicItem },
    created () {
      this.swiperHeight = this.cHeight + 'px'
    }
  }
</script>

<style lang='less' scoped>
  .contain{
    position:absolute;
    width:100%;
    height:100%;
    box-sizing:border-box;
    .head{
      height:5rem;
    }
    .swiper{
      width:100%;
      height:100%;
    }
    .swiper-item{
      width:100%;
      height:100%;
      .bg{
        text-align:center;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        .icon{
          i{
            font-size:8rem;
          }
          height:10rem;
        }
        .text{
          color:#999;
          font-size: 1.2rem;
        }
      }
      .scroller{
        margin-top:5rem;
      }
    }

  }
</style>
