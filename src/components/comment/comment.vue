<template>
<div class="wrapper">
  <x-header :left-options="{backText: ''}" class="head vux-1px-b">评论</x-header>
  <scroller lockX scrollbarY height="-105px">
    <div>
      <div class="article-wrapper">
        <div class="cover"></div>
        <div class="article">
          <div class="title-wrapper">
            <div class="title">史上最详细VUE2.0 全套 demo 讲解 基础4 (条件渲染)</div>
            <div class="avatar-wrapper">
              <div class="avatar"></div>
            </div>
          </div>
          <p class="content">作者：混元霹雳手 - Ziksang 三篇基础发布之后，收到最多的就是谢谢楼主，其次的就是错别字有点多，这篇我肯定写完之后读三遍，现在已经是夜里2点多了，如果还没有发现大家及容忍一下，这次我将要讲的是条件渲染，对于条件渲染我觉得试来试去真没有什么好些的，但是我既然说过了这个是时尚最详细那我就要坚持我的创作，做一个最完整的的教程出来，但是如果你真的从头到尾把这篇文章看下去，我相信你肯定会有收获</p>
          <div class="handle">
            <div class="like-wrapper inblk">
              <i class="iconfont c66c300" :class="isLiked?'icon-likefill':'icon-like'" @click="likeIt"></i>
              <span class="num">{{likeNum}}</span>
            </div>
          </div>
        </div>
      </div>
      <eachComment v-for="n in 7" :key="n"></eachComment>
    </div>
  </scroller>
  <div class="foot flex bottom vux-1px-t">
    <input type="text" v-model="commentContent" placeholder="评论">
    <button class="tColor" :class="{opacity:isTouched}"
            @touchstart="isTouched=true" @touchend="isTouched=false">发送</button>
  </div>
</div>
</template>

<script>
  import { XHeader, Scroller } from 'vux'
  import eachComment from '../eachComment/eachComment.vue'
  export default {
    data () {
      return {
        likeNum: 188,
        isLiked: false,
        commentContent: '',
        isTouched: false
      }
    },
    methods: {
      likeIt () {
        this.isLiked = !this.isLiked
        this.likeNum = this.isLiked ? this.likeNum + 1 : this.likeNum - 1
        this.$store.state.toast.success = this.isLiked
        this.$store.state.toast.cancel = !this.isLiked
      }
    },
    components: { XHeader, Scroller, eachComment }
  }
</script>

<style lang='less' scoped>
  .opacity{
    opacity:0.2 !important;
  }
  .wrapper{
    width:100%;
    height:100%;
    position: fixed;
    top:0;
    left:0;
    z-index:999;
    background-color: #efeff1;
    .article-wrapper{
      padding-bottom:2rem;
      .cover{
        width: 100%;
        height: 16rem;
        background:url("./cover.png");
        background-size:100% 100%;
      }
      .article{
        padding:1.5rem;
        background-color:#fff;
        .title-wrapper{
          display:flex;
          .title{
            flex:1 1 auto;
            font-size:1.4rem;
            font-weight: 600;
          }
          .avatar-wrapper{
            flex:0 0 auto;
            padding-left:2rem;
            .avatar{
              width:2.5rem;
              height:2.5rem;
              border-radius: 50%;
              background:url("./avatar.jpg");
              background-size:100% 100%;
            }
          }
        }
        .content{
          padding:.5rem 0;
          color:#999;
          font-size:1.2rem;
          overflow:hidden;
          max-height:9rem;
        }
        .handle{
          padding-top:.5rem;
          text-align:right;
          i{
            padding:0 .5rem;
            font-size:1.8rem;
          }
          .num{
            color:#999;
            font-size: 1.3rem;
          }
        }
      }
    }
    .bottom{
      background-color: #fff;
      padding:1rem;
      input{
        flex:1 1 auto;
        border:1px solid #ccc;
        border-radius:.8rem;
        outline:none;
        padding: 0 1rem;
        font-size: 1.6rem;
      }
      button{
        border:none;
        background:none;
        padding:0 1rem;
        outline:none;
        transition: all .4s ease;
      }
    }
  }
</style>
