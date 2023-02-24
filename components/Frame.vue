<template>
  <div class="frame">
    <div class="bgGreen">
      <slot></slot>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.frame {
  border: 70px solid transparent;
  border-image: url(~@/assets/images/bordas.svg) 60.47 round;
}
</style>
