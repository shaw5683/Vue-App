<template>
  <div class="select-bar">
    <div class="head vux-1px-b">
      <x-header :left-options="{backText: ''}">首页特别展示</x-header>
    </div>
    <group>
      <x-switch  v-for="(item,index) in $store.state.selectedItems" :key="index" :title="item.name"
                 v-model="item.selected"></x-switch>
    </group>
  </div>
</template>

<script>
  import { XHeader, XSwitch, Group } from 'vux'
  export default {
    components: { XHeader, XSwitch, Group },
    created () {}
  }
</script>

<style lang='less' scoped>
  .select-bar{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#efefef;
    z-index:999;
  }
</style>
