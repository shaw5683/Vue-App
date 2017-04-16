<template>
  <div>
    <router-link to="/article">
      <div class="container vux-1px-b" :class="{touched:isTouched}" @touchstart="start" @touchend="end">
        <div class="left">
          <div class="title">免安装Android和IOS编译环境，直接进行React Native开发</div>
          <div class="about cColor" v-if="isHot">
            <span class="about-item"><i class="iconfont icon-likefill"></i>62</span>
            <span class="about-item"><i class="iconfont icon-peoplefill"></i>liutao</span>
            <span class="about-item"><i class="iconfont icon-timefill"></i>昨天</span>
          </div>
          <div class="about cColor" v-else>
            <span class="about-item">62人喜欢<span class="dot">·</span></span>
            <span class="about-item">liutao<span class="dot">·</span></span>
            <span class="about-item">昨天</span>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </router-link>
  </div>
</template>

<script>
  import myTransition from '../myTransition/myTransition.vue'
  export default {
    data () {
      return {
        isTouched: false,
        timer: null
      }
    },
    methods: {
      start () {
        let self = this
        this.timer = setTimeout(function () {
          self.isTouched = true
        }, 300)
      },
      end () {
        clearTimeout(this.timer)
        this.isTouched = false
      }
    },
    props: ['isHot'],
    components: { myTransition }
  }
</script>

<style lang='less' scoped>
  .touched{
    background-color: #eee !important;
  }
  .container{
    padding:2rem 1.5rem;
    height:9rem;
    box-sizing:border-box;
    display:flex;
    background:#fff;
    transition: all .1s;
    .left{
      vertical-align: top;
      flex: 1 1 auto;
      .title{
        overflow:hidden;
        font-size: 1.4rem;
        max-height:4rem;
        padding-right:4rem;
        line-height:2rem;
      }
      .about{
        font-size:1.2rem;
        .about-item{
          .dot{
            padding:0 .5rem;
          }
        }
      }
      i{
        font-size: 1.2rem;
        padding-right:.4rem;
      }
    }
    .right{
      width:6rem;
      height:6rem;
      background:url(./cover.jpg);
      background-size:cover;
      flex:0 0 auto;
    }
  }
</style>
