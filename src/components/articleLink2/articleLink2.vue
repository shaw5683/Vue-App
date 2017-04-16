<template>
  <div class="container" @click="jumpTo">
    <div class="top">
      <div class="avatar-wrapper">
        <div class="avatar"></div>
      </div>
      <div class="user-message">
        <div class="nickname">CRPER</div>
        <div class="detail cColor">
          <span class="u-tag">Web前端开发</span>
          <span class="u-address">@深圳脚印数据（即将失业）</span>
          <span class="u-time"><span class="dot">·</span>8小时前</span>
          <span v-if="isOriginal"><span class="dot">·</span>发表了文章</span>
        </div>
      </div>
      <div class="article-tag cColor">Angular.js</div>
    </div>
    <div class="cover-picture" v-if="isOriginal" :style="{backgroundImage:'url('+coverPic+')'}"></div>
    <div class="content" v-if="isOriginal">
      <div class="title">Angular 2 + 折腾记：(6)动手实现只有年月的小组件</div>
      <div class="abstract">前言 这个组件的实现并不是很复杂, 我会尽量注释; 这货诞生的理由就是项目刚好有一个地方必须只能选择年月, 而github上ng2+日期组件都涉及到年月日或时分秒前言 这个组件的实现并不是很复杂, 我会尽量注释; 这货诞生的理由就是项目刚好有一个地方必须只能选择年月, 而github上ng2+日期组件都涉及到年月日或时分秒</div>
    </div>
    <div class="transmit-content" v-else>
      <p class="description" :class="{unfolding:!isUnfold}">作为一枚程序员，我们天生就是来解决问题的。在你不知道你的问题之前，我帮不了你，Google也不能帮你解决问题。作为一枚程序员，我们天生就是来解决问题的。在你不知道你的问题之前，我帮不了你，Google也不能帮你解决问题。</p>
      <div class="unfold" @click="isUnfold=!isUnfold">{{isUnfold?"全文":"收起"}}</div>
      <router-link to="/article">
        <div class="transmit-article vux-1px f0" :class="{touched:isTouched}" @touchstart="start" @touchend="end">
          <div class="transmit-cover inblk"></div>
          <div class="transmit-title inblk">多图 | 发布Node模块到NPM社区方法详解</div>
        </div>
      </router-link>
    </div>
    <div class="handle">
      <div class="like inblk" @click="likeIt">
        <i class="iconfont c66c300" :class="isLike?'icon-likefill':'icon-like'"></i><span class="number cColor">12
      </span>
      </div>
      <router-link to="/home/comment">
        <div class="comment inblk cColor">
          <i class="iconfont icon-comment_light"></i><span class="number">7</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import myTransition from '../myTransition/myTransition.vue'
  export default {
    data () {
      return {
        isUnfold: true,
        isLike: false,
        isTouched: false,
        timer: null,
        original: this.isOriginal,
        coverPic: require('./cover.png')
      }
    },
    methods: {
      likeIt () {
        this.isLike = !this.isLike
        this.$store.state.toast.success = this.isLike
        this.$store.state.toast.cancel = !this.isLike
      },
      start () {
        let self = this
        this.timer = setTimeout(function () {
          self.isTouched = true
        }, 300)
      },
      end () {
        clearTimeout(this.timer)
        this.isTouched = false
      },
      jumpTo () {
        if (this.original) {
          this.$router.push('/article')
        }
      }
    },
    props: ['isOriginal'],
    components: { myTransition }
  }
</script>

<style lang='less' scoped>
  .touched{
    background-color: #eee !important;
  }
  .container{
    background-color: #fff;
    margin-bottom: 1rem;
    box-sizing:border-box;
    padding:0;
    .top{
      display:flex;
      padding:1.5rem 1.5rem;
      .avatar-wrapper{
        padding-right:1rem;
        flex:0 0 auto;
        .avatar{
          background: url("./avatar.jpg");
          background-size:cover;
          border-radius: 10%;
          width:2.6rem;
          height:2.6rem;
        }
      }
      .user-message{
        width: calc(~"100% - 9.6rem");
        .nickname{
          font-size:1.2rem;
          line-height: 1.2rem;
          color:#1c4587;
          font-weight:bold;
        }
        .detail{
          font-size:1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow:hidden;
        }
        .dot{
          padding:0 .5rem;
        }
      }
      .article-tag{
        flex:0 0 auto;
        font-size: 1.2rem;
        width:3rem;
        text-align:right;
      }
    }
    .cover-picture{
      width:100%;
      height:14rem;
      background-size:100% 100%;
    }
    .content{
      padding:1.5rem 1.5rem 0;
      .title{
        font-weight: bold;
      }
      .abstract{
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:3;
        overflow:hidden;
        font-size: 1.4rem;
      }
    }
    .transmit-content{
      padding:0 1.5rem;
      .description{
        font-size: 1.2rem;
        line-height: 1.5rem;
        max-height:3rem;
        overflow:hidden;
      }
      .unfolding{
        max-height:none;
      }
      .unfold{
        color:#1c4587;
        font-size: 1.2rem;
        width:3rem;
      }
      .transmit-article{
        display:flex;
        align-items:center;
        .transmit-cover{
          background: url("./cover1.png");
          background-size:cover;
          width:6rem;
          height:6rem;
          flex:0 0 auto;
        }
        .transmit-title{
          font-size:1.4rem;
          font-weight: 600;
          padding:0 1rem;
        }
      }
    }
    .handle{
      font-size: 1.4rem;
      padding:1.5rem;
      i{
        padding-right:.5rem;
        font-size: 1.4rem;
      }
      .like{
        margin-right:2rem;
      }
    }
  }
</style>
