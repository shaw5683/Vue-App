<template>
  <div class="contain">
    <myTransition>
      <router-view></router-view>
    </myTransition>
    <div class="search-wrapper">
      <search></search>
    </div>
    <scroller lockX scrollbarY height="-105px">
      <div>
        <swiper height="140px" :show-dots="false" :auto="true" :loop="true">
          <swiper-item>
            <div class="cover"></div>
          </swiper-item>
          <swiper-item>
            <div class="cover1"></div>
          </swiper-item>
        </swiper>
        <ul class="flex list">
          <li class="list-item">
            <router-link to="/discovery/weekHot">
              <div class="icon">
                <i class="iconfont icon-hotfill"></i>
              </div>
              <div class="item-tag">本周最热</div>
            </router-link>
          </li>
          <li class="list-item">
            <div class="icon">
              <i class="iconfont icon-presentfill"></i>
              <div class="item-tag">收藏集</div>
            </div>
          </li>
          <li class="list-item">
            <div class="icon">
              <i class="iconfont icon-notificationfill"></i>
              <div class="item-tag">线下活动</div>
            </div>
          </li>
          <li class="list-item">
            <div class="icon">
              <i class="iconfont icon-formfill"></i>
              <div class="item-tag">专栏</div>
            </div>
          </li>
        </ul>
        <div class="boiling">
          <div class="title">
            <group>
              <cell title="沸点" is-link link="/discovery/boiling">
                <i class="iconfont icon-community_fill_light" slot="icon"></i>
              </cell>
            </group>
          </div>
          <div class="main">
            <scroller lockY :bounce="false">
              <div class="item-wrapper f0">
                <div class="item inblk" v-for="n in 5" :key="n">
                  沸点：如果有一年的空闲时间你会去做...
                </div>
                <div class="see-all inblk">
                  <div class="icon">
                    <i class="iconfont icon-roundright tColor"></i>
                  </div>
                  <div class="text tColor">查看全部</div>
                </div>
              </div>
            </scroller>
          </div>
        </div>
        <div class="hot-article">
          <div class="title">
            <group>
              <cell title="热门文章">
                <i class="iconfont icon-hotfill" slot="icon"></i>
                <div class="right" slot="default">
                  <i class="iconfont icon-settings"></i>
                  <span class="text">定制热门</span>
                </div>
              </cell>
            </group>
          </div>
          <articleLink1 v-for="n in 20" :key="n"></articleLink1>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import { Search, Scroller, Group, Cell, Swiper, SwiperItem } from 'vux'
  import articleLink1 from '../articleLink1/articleLink1.vue'
  import myTransition from '../myTransition/myTransition.vue'
  export default {
    components: { Search, Scroller, Group, Cell, articleLink1, Swiper, SwiperItem, myTransition }
  }
</script>

<style lang='less' scoped>
  .contain{
    width:100%;
    position:absolute;
    .cover{
      height:14rem;
      width:100%;
      background: url('./cover.jpg');
      background-size:100% 100%;
    }
    .cover1{
      height:14rem;
      width:100%;
      background: url('./cover1.jpg');
      background-size:100% 100%;
    }
    .search-wrapper{
      width:100%;
      height:5rem;
    }
    .list{
      margin-top:1rem;
      background-color:#fff;
      .list-item{
        text-align: center;
        flex:1 1 auto;
        padding:1rem 0;
        width:25%;
        .icon{
          i{
            font-size:3rem;
          }
        }
        &:nth-child(1){
          i{
            color:orangered;
          }
        }
        &:nth-child(2){
          i{
            color:mediumseagreen;
          }
        }
        &:nth-child(3){
          i{
            color:#ffcc66;
          }
        }
        &:nth-child(4){
          i{
            color:slateblue;
          }
        }
      }
    }
    .boiling{
      .title{
        i{
          color:#ff9900;
          padding-right:1rem;
        }
      }
      .main{
        background:#fff;
        padding:1rem 0;
        .item-wrapper{
          width:100rem;
        }
        .item{
          background: url("./boiling.jpg");
          background-size:cover;
          width:17rem;
          height:8rem;
          border-radius: 1rem;
          margin-left: 1rem;
          color:#fff;
          font-size: 1.4rem;
          padding:1.9rem;
          box-sizing:border-box;
        }
        .see-all{
          vertical-align:top;
          height:8rem;
          width:8rem;
          margin-left: 1rem;
          border:1px solid #ccc;
          text-align:center;
          border-radius:1rem;
          .icon{
            line-height:5.5rem;
            height:5rem;
            i{
              font-size: 4rem;
            }
          }
          .text{
            font-size: 1.6rem;
          }
        }
      }
    }
    .hot-article{
      .title{
        i{
          padding-right:1rem;
          color:orangered;
        }
        .right{
          font-size:1.4rem;
          i{
            padding-right:0;
            color:#666;
            font-size:1.4rem;
          }
        }
      }
    }
  }
</style>
