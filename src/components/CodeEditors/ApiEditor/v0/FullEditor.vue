<template>
  <div>
    {{ lRoutes }}
    <single-editor v-for=" (singleRoute,i) in allRoutes" v-model="allRoutes[i]" @update:modelValue="console.log" :key="i" />
  </div>
</template>
<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import singleEditor from 'src/components/CodeEditors/ApiEditor/v0/SingleRoute.vue';

// const routeAddition = ref({rname:'yoyou', })
const allRoutes = ref([{rName:'Hello',content:'YO',contentType:'text',verb:'GET',statusCode:200},
                      {rName:'/Keyal',content:'OKcat',contentType:'text',verb:'GET',statusCode:200}])
const lRoutes = computed(()=>allRoutes.value.length)
const lastRName = computed(()=>allRoutes.value[lRoutes.value-1].rName)
watch(lastRName,()=>{

  if(!!lastRName.value)
    allRoutes.value.push({rName:'',content:'',contentType:'text',verb:'GET',statusCode:200})

},{immediate: true})

//TODO: optimize it as it is highly unoptimized sending all routes for every update
function pushRoutes(){
  if(!navigator.serviceWorker.controller)
    {
      console.error("this is wierd")
      return;
    }
   navigator.serviceWorker.controller.postMessage({'dest': 'routes/loading',payload:allRoutes.value})
}
</script>
