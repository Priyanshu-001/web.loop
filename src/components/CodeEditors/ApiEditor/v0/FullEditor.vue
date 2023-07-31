<template>
  <div>
    <single-editor></single-editor>
  </div>
</template>
<script setup lang="ts">
import singleEditor from 'src/components/CodeEditors/ApiEditor/v0/SingleRoute.vue'
//TODO: optimize it as it is highly unoptimized sending all routes for every update
function pushRoutes(){
  if(!navigator.serviceWorker.controller)
    {
      console.error("this is wierd")
      return;
    }
   navigator.serviceWorker.controller.postMessage({'dest': 'routes/loading',payaload:[{'hello':'bye'}]})
}
</script>
