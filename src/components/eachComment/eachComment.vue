<template>
  <div class="container vux-1px-b">
    <div class="avatar-wrapper">
      <div class="avatar"></div>
    </div>
    <div class="right">
      <div class="username">KissTonight</div>
      <p class="content">我自己写的vue日历组件，支持接口最大时间，最小时间，其实时间，区间段不让选时间，尽情期待。</p>
      <div class="right-bottom">
        <div class="time cColor">6小时前</div>
        <div class="appreciate-wrapper">
          <i class="iconfont icon-appreciatefill" :class="isAppreciated?'c66c300':'cColor'"
             @click="doAppreciate"></i>
          <span class="appreciate-num" :class="isAppreciated?'c66c300':'cColor'">{{appreciateNum}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isAppreciated: false,
        appreciateNum: 8
      }
    },
    methods: {
      doAppreciate () {
        this.isAppreciated = !this.isAppreciated
        this.appreciateNum = this.isAppreciated ? this.appreciateNum + 1 : this.appreciateNum - 1
      }
    }
  }
</script>

<style lang='less' scoped>
  .container{
    padding:1rem;
    height:auto;
    display:flex;
    background-color:#fff;
    .avatar-wrapper{
      flex:0 0 auto;
      padding-right:1rem;
      .avatar{
        width:3rem;
        height:3rem;
        background:url("./avatar.jpg");
        background-size:100% 100%;
        border-radius: 5%;
      }
    }
    .right{
      flex:1 1 auto;
      .username{
        color:#1c4587;
        font-size: 1.2rem;
        font-weight: bold;
      }
      .content{
        font-size: 1.2rem;
      }
      .right-bottom{
        display:flex;
        align-items:center;
        justify-content:space-between;
        .time{
          font-size: 1rem;
        }
        .appreciate-wrapper{
          i{
            font-size:1.2rem;
          }
          .appreciate-num{
            font-size:1.2rem;
          }
        }
      }
    }
  }
</style>
