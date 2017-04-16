<template>
  <transition name="show">
    <div class="hot" v-if="isShow">
      <div class="title-bar vux-1px-b">
        <i class="icon iconfont icon-hotfill tColor"></i>
        <span class="title">{{title}}</span>
        <i class="icon iconfont icon-close fr cColor pl25"  @click="close"></i>
        <i class="icon hotIcon iconfont icon-refresh fr cColor" :class="{rotation:isRotate}"
           @click="refresh"></i>
      </div>
      <articleLink1 v-for="n in 3" :key="n" :isHot="true"></articleLink1>
    </div>
  </transition>
</template>

<script>
  import articleLink1 from '../articleLink1/articleLink1.vue'
  export default {
    data () {
      return {
        title: '',
        isRotate: false,
        isShow: true
      }
    },
    props: ['msg'],
    created () {
      this.title = (this.msg === '首页') ? '热门推荐' : (this.msg + '热门')
    },
    methods: {
      refresh () {
        console.log(this.isRotate)
        if (this.isRotate === false) {
          let self = this
          this.isRotate = true
          setTimeout(function () {
            self.isRotate = false
          }, 1000)
        }
      },
      close () {
        this.isShow = false
      }
    },
    components: { articleLink1 }
  }
</script>

<style lang='less' scoped>
  @keyframes rotation {
    from {transform:rotate(0deg)}
    to {transform:rotate(360deg)}
  }
  .rotation{
    animation:rotation 1.5s ease;
  }
  .show-enter-active, .show-leave-active {
    transition:all 1s ease;
  }
  .show-enter, .show-leave-active {
    opacity:0;
  }
  .hot{
  padding:1rem 0;
    .title-bar{
      padding:.5rem 1.5rem;
      background:#fff;
      i.icon{
        font-size:1.2rem;
        padding-right:.2rem;
      }
      .title{
        color:#007fff;
        font-size:1.4rem;
      }
      .pl25{
        padding-left:2.5rem;
      }
    }
  }
</style>
