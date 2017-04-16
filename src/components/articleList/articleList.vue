<template>
  <div class="container">
    <scroller lockX scrollbarY height="-105px">
      <div>
        <hotRecommend :msg="dataTitle"></hotRecommend>
        <div v-for="n in 15" :key="n">
          <articleLink2 :isOriginal="false" v-if="dataTitle==='首页'"></articleLink2>
          <articleLink2 :isOriginal="true" v-if="dataTitle==='首页'"></articleLink2>
          <articleLink1 v-else v-for="n in 2" :key="n"></articleLink1>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  import { Scroller } from 'vux'
  import hotRecommend from '../hotRecomand/hotRecommend.vue'
  import articleLink1 from '../articleLink1/articleLink1.vue'
  import articleLink2 from '../articleLink2/articleLink2.vue'
  export default {
    data () {
      return {

      }
    },
    props: ['dataTitle'],
    components: { Scroller, hotRecommend, articleLink1, articleLink2 }
  }
</script>

<style lang='less' scoped>
  .container{
    width:100%;
    padding-top:50px;
  }
</style>
