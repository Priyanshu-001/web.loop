<template>
  <div>
    <div class="row flex-center justify-between align-center ">
      <h2 class="q-mx-sm">API Editor</h2>
      <q-btn push primary icon="loop" color="primary" :loading="reloading" @click="saveConfig">
        <template v-slot:loading>
        <q-spinner-facebook />
      </template>
        Reload Server</q-btn>
    </div>
    <single-editor v-for=" (singleRoute,i) in allRoutes" v-model="allRoutes[i]" :index="i"  @update:modelValue="console.log" :key="i" />
  </div>
</template>
<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import singleEditor from 'src/components/CodeEditors/ApiEditor/v0/SingleRoute.vue';
import useServiceWorkerCommunication from 'src/composables/ServerCommunicator'

const reloading = ref(false)
// const routeAddition = ref({rname:'yoyou', })
const allRoutes = ref([{rName:'Hello',content:'YO',contentType:'text',verb:'GET',statusCode:200},
                      {rName:'/Keyal',content:'OKcat',contentType:'text',verb:'GET',statusCode:200}])
const lRoutes = computed(()=>allRoutes.value.length)
const lastRName = computed(()=>allRoutes.value[lRoutes.value-1].rName)
watch(lastRName,()=>{
  if(!!lastRName.value)
    allRoutes.value.push({rName:'',content:'',contentType:'text',verb:'GET',statusCode:200})

},{immediate: true})

const {addNewRoutes} = useServiceWorkerCommunication()
function saveConfig(){
  reloading.value=true;
  addNewRoutes(allRoutes)
  reloading.value=false;
}

</script>
<style scoped>
  h2{
    padding: 1rem;
    margin:0px;
  }
</style>
