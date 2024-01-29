<template>
    <v-btn 
    class="padraoButton"
    rounded="pill"
    elevation="0"
    large
    dark
    color="#222222"
    :href="link"
    text-transform="uppercase"
    :class="{
      white: isWhite,
      'black--text': isWhite,
      'white--text': !isWhite
      }"
    
    >
        <slot>

        </slot>
    </v-btn>
</template>

<script>
export default {
    name:"Button",
    props: {
      link:{
        type: String,
      },
      isWhite:{
        type: Boolean,
        default: false
      },
      
  }
}
</script>
<style>
.padraoButton {
  font-size: 16px;
  letter-spacing: normal;
  font-family: Fuji;
  font-weight: 500;
}


</style>