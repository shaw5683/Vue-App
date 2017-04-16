<template>
  <div class="contain">
    <x-header class="head" :left-options="{backText:''}">
      <router-link slot="left" to="/userInfo">
        <div class="head-left">
          <div class="avatar-wrapper inblk">
            <div class="avatar"></div>
          </div>
          <div class="username inblk">CRPER</div>
        </div>
      </router-link>
    </x-header>
    <scroller lockX scrollbarY height="-105px">
      <div @click="hideComment">
        <div class="cover"></div>
        <div class="article-wrapper">
          <div class="title">Angular 2 + 折腾记 : (7) 初步了解表单 : 模板驱动及数据驱动及脱坑要点</div>
          <div class="from">原文链接 <span class="source">xxx.com</span></div>
          <div class="section-wrapper">
            <div class="section-title">前言</div>
            <div class="section-content">表单在整个系统中的作用相当重要，这里主要扯下响应式表单的实现方式。
              首先需要操作表单的模块引入这两个模块；</div>
          </div>
          <div class="section-wrapper">
            <div class="section-title">表单空间响应的几种状态</div>
            <div class="section-content">模板驱动表单依赖FormsModule,数据驱动的表单依赖FormsModule,ReactiveFormsModule
              一般做表单校验及操作推荐用数据驱动的方式，好维护和理解。。</div>
          </div>
          <div class="section-wrapper">
            <div class="section-title">模板驱动</div>
            <div class="section-content">模板驱动：主要是依赖[(ngModel)]和#scope_var以及原生表单控件属性(require,minlenght,maxlength等)来操作表单的那的值亦或者校验</div>
          </div>
          <div class="article-tag">Angular.js</div>
          <div class="others f0">
            <div class="readers inblk">阅读</div>
            <div class="readersNum inblk">339</div>
            <div class="dot inblk">·</div>
            <div class="readers inblk">喜欢</div>
            <div class="readersNum inblk">19</div>
          </div>
          <div class="avatar-list">
            <div class="avatar-wrapper inblk" v-for="n in 19">
              <div class="avatar"></div>
            </div>
          </div>
        </div>
        <div class="user-info flex">
          <div class="avatar-wrapper">
            <div class="avatar"></div>
          </div>
          <div class="info">
            <div class="username">CRPER</div>
            <div class="user-tag">Web前端开发 @ 深圳脚印数据</div>
            <div class="descript">折腾是一种乐趣，求知是一种追求。不懂就学，懂则分享。</div>
            <button @click="isAttention=!isAttention" :class="{click:isAttention}"><i class="iconfont" :class="isAttention?'icon-check':'icon-add'"></i> <span class="attention">关注</span></button>
          </div>
        </div>
        <div class="more-article">
          <div class="title vux-1px-b">CRPER的更多文章</div>
          <articleLink1 v-for="n in 3" :key="n"></articleLink1>
        </div>
        <div class="comment-wrapper" @click.stop="doComment">
          <div class="comment flex">
            <div class="avatar-wrapper">
              <div class="avatar"></div>
            </div>
            <div class="text">说说你的想法...</div>
          </div>
        </div>
      </div>
    </scroller>
    <div class="foot flex vux-1px-t" v-if="!isComment">
      <i class="iconfont c66c300" :class="isLike?'icon-likefill':'icon-like'" @click="likeIt"></i>
      <i class="iconfont icon-comment cColor" do></i>
      <i class="iconfont icon-edit_light cColor"></i>
      <div class="like-wrapper cColor">
        喜欢 <span class="number">{{likeNum}}</span>
      </div>
    </div>
    <div class="foot flex bottom vux-1px-t" v-else>
      <input type="text" placeholder="说说你的想法" autofocus>
      <button class="tColor" :class="{opacity:isTouched}"
              @touchstart="isTouched=true" @touchend="isTouched=false">发送</button>
    </div>
  </div>
</template>

<script>
  import { XHeader, Scroller } from 'vux'
  import articleLink1 from '../articleLink1/articleLink1.vue'
  export default {
    data () {
      return {
        isAttention: false,
        isLike: false,
        likeNum: 19,
        isComment: false,
        isTouched: false,
        coverPic: require('cover.png')
      }
    },
    methods: {
      likeIt () {
        this.isLike = !this.isLike
        this.$store.state.toast.success = this.isLike
        this.$store.state.toast.cancel = !this.isLike
        if (this.isLike) {
          this.likeNum++
        } else {
          this.likeNum--
        }
      },
      doComment () {
        this.isComment = true
      },
      hideComment () {
        if (this.isComment === true) {
          this.isComment = false
        }
      }
    },
    components: { XHeader, Scroller, articleLink1 }
  }
</script>

<style lang='less' scoped>
  .opacity{
    opacity:0.2 !important;
  }
  .contain{
    width:100%;
    position:absolute;
    z-index:998;
    background-color: #efefef;
    .head-left{
      padding-left:5rem;
      .avatar-wrapper{
        vertical-align:middle;
        padding-right:1rem;
        .avatar{
          width:2.5rem;
          height:2.5rem;
          background:url(./avatar.jpg);
          background-size:cover;
          border-radius:50%;
        }
      }
      .username{
        font-weight: bold;
        vertical-align: middle;
      }
    }
    .cover{
      width:100%;
      height:18rem;
      background-size:cover;
      background-image: url('./cover.png');
    }
    .article-wrapper{
      padding:0 1.5rem;
      background-color:#fff;
      .title{
        font-weight: bold;
        font-size: 2.2rem;
      }
      .from{
        font-size: 1.2rem;
        color:#999;
        .source{
          color:#1c4587;
        }
      }
      .section-wrapper{
        .section-title{
          font-size: 2.8rem;
          font-weight: bold;
          padding:2rem 0;
        }
      }
      .article-tag{
        height:2.5rem;
        width:8rem;
        background-color: #efefef;
        line-height: 2.5rem;
        font-size: 1.4rem;
        margin:3rem .5rem;
        text-align: center;
        color:#999;
      }
      .others{
        &>div{
           color:#ccc;
           font-size: 1.4rem;
         }
        .dot{
          padding:0 1rem;
        }
        .readers{
          padding-right:.5rem;
        }
      }
      .avatar-list{
        padding-bottom:1.5rem;
        .avatar-wrapper{
          padding:.5rem .5rem 0 0;
          .avatar{
            width:2.5rem;
            height:2.5rem;
            background:url(./avatar.jpg);
            background-size:cover;
            border-radius: 50%;
          }
        }
      }
    }
    .user-info{
      background-color: #fff;
      margin:1rem 0;
      padding: 2.5rem 1.5rem;
      .avatar-wrapper{
        padding-right:1rem;
        flex:0 0 auto;
        .avatar{
          width:3.5rem;
          height:3.5rem;
          border-radius: 10%;
          background:url(./avatar.jpg);
          background-size:cover;
        }
      }
      .info{
        font-size:1.4rem;
        .user-tag{
          color:#aaa;
          padding: .1rem 0;
        }
        .descript{
          color:#aaa;
          padding: .1rem 0;
        }
      }
      button{
        border:1px solid limegreen;
        background-color: #fff;
        color:limegreen;
        width:8rem;
        height:3rem;
        margin:.3rem 0;
        i{
          vertical-align: middle;
        }
        &.click{
          color:#fff;
          background-color: limegreen;
          .attention{
            &::before{
              content:'已'
            }
          }
        }
      }
    }
    .more-article{
      .title{
        background-color: #fff;
        padding:1.5rem;
        color:#999;
      }
    }
    .comment-wrapper{
      padding-bottom:1rem;
      .comment{
        padding:1.5rem;
        background:#fff;
        margin-top:1rem;
        align-items:center;
        .avatar-wrapper{
          flex: 0 0 auto;
          padding-right:1.5rem;
        .avatar{
          width:3.5rem;
          height:3.5rem;
          background:url(./avatar.jpg);
          background-size:cover;
          border-radius: 5%;
        }
        }
        .text{
          color:#999;
        }
      }
    }
    .foot{
      background-color: #fff;
      opacity:1;
      padding:1.5rem;
      align-items:center;
      i{
        padding-right:3rem;
        font-size: 2.5rem;
      }
      .like-wrapper{
        margin-left:auto;
      }
    }
    .bottom{
      background-color: #fff;
      padding:1rem;
      opacity:1;
      input{
        flex:1 1 auto;
        border-radius:.8rem;
        outline:none;
        padding: 0 1rem;
        font-size: 1.6rem;
        border:1px solid #eee;
        height:3.5rem;
      }
      button{
        border:none;
        background:none;
        padding:0 1rem;
        outline:none;
        transition: all .4s ease;
        font-size: 1.6rem;
      }
    }
  }
</style>
