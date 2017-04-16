<template>
  <div class="wrap flex">
    <div class="icon">
      <i class="iconfont icon-likefill c66c300"></i>
    </div>
    <div class="content vux-1px-b">
      <span class="username">凹凸大侠</span><span class="like"> 喜欢了 </span><span class="article-title">一个非常适合入门学习的React-Native博客项目</span><span class="time">6小时前</span>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang='less' scoped>
  .wrap{
    background-color: #fff;
    .icon{
      flex:0 0 auto;
      width:3.5rem;
      text-align: center;
      padding:1rem 0 1rem 1rem;

    }
    .content{
      flex:1 1 auto;
      padding:1rem;
      color:#1c4587;
      .like{
        color:#999;
      }
      .time{
        color:#999;
        font-size: 1.2rem;
        padding-left: .5rem;
      }
    }
  }
</style>
