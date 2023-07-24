<template>
  <!-- <router-view /> -->
  <main-ide/>
</template>

<script>
import { defineComponent } from 'vue'
import MainIde from './pages/MainIde.vue';
export default defineComponent({
  name: 'App',
  components:{
    MainIde,
  }
})
</script>
