<template>
  <div class="wrap">
    <x-header :left-options="{showBack: false}" class="head">我</x-header>
    <scroller lockX height="-105px" class="scroller">
      <div>
        <group>
          <cell class="me" is-link title="Shaw同学">
            <img src="./me2.jpg" alt="头像" class="avatar" slot="icon">
          </cell>
        </group>
        <group>
          <cell title="我喜欢的" class="common-cell">
            <i class="iconfont icon-likefill c66c300" slot="icon"></i>
            <span slot="default">0篇</span>
          </cell>
          <cell title="收藏集" class="common-cell">
            <i class="iconfont icon-sort tColor" slot="icon"></i>
            <span slot="default">1个</span>
          </cell>
          <cell title="阅读过的文章" class="common-cell">
            <i class="iconfont icon-attentionfill c999" slot="icon"></i>
            <span slot="default">299篇</span>
          </cell>
          <cell title="标签管理" class="common-cell">
            <i class="iconfont icon-tagfill c999" slot="icon"></i>
            <span slot="default">13个</span>
          </cell>
        </group>
        <group>
          <cell title="周榜" class="common-cell">
            <i class="iconfont icon-medalfill orangered" slot="icon"></i>
          </cell>
          <cell title="意见反馈" class="common-cell">
            <i class="iconfont icon-formfill c999" slot="icon"></i>
          </cell>
          <cell title="设置" class="common-cell">
            <i class="iconfont icon-settings c999" slot="icon"></i>
          </cell>
        </group>
      </div>
    </scroller>
  </div>
</template>

<script>
  import { Group, Cell, Scroller, XHeader } from 'vux'
  export default {
    components: { Group, Cell, Scroller, XHeader }
  }
</script>

<style lang='less' scoped>
  .wrap{
    .me{
      font-size:2rem;
      .avatar{
        width:6rem;
        height:6rem;
        border-radius:50%;
        margin-right:2rem;
      }
    }
    .common-cell{
      font-size:1.5rem;
      i{
        padding-right:1rem;
      }
      span{
        font-size: 1.4rem;
      }
    }
  }
</style>
