<template>
  <transition name="normal">
    <slot></slot>
  </transition>
</template>

<script>
  export default {}
</script>

<style lang='less' scoped>
  .normal-enter-active, .normal-leave-active {
    transition:all .3s ease;
  }
  .normal-enter, .normal-leave-active {
    transform: translateX(100%);
    opacity:0;
  }
</style>
