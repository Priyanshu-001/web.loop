


<template>
  <q-card class="q-pa-md q-ma-sm q-my-md  " >
  <!-- <h2>Route  #2</h2> -->
  <div class="row justify-between">
    <h2>Route #{{ index  }}</h2>
  <q-btn push glossy icon="delete" text-color="red" size="sm" :loading="loading" @click="loading=true">
    <template v-slot:loading>
        <q-spinner-facebook />
      </template>
    Delete</q-btn>
  </div>
  <q-form>
    <div class=" flex q-my-sm q-gutter-sm row">

        <q-select
        label="Method"
        class="col-3"
        outlined
        :options="['GET','POST','PUT','PATCH','CREATE']" :modelValue="modelValue.verb"
        @update:modelValue="$val=>emitUpdate('verb',$val)"
        />

      <q-input name="route"
      prefix="/qRes/"
      outlined
      class="col-grow"
      label="Route"
      :modelValue="modelValue.rName"
      @update:modelValue="$val=>emitUpdate('rName',$val)"/>

    </div>
    <div class="flex q-gutter-sm q-my-sm row">

          <q-select
          class="col-grow"
          label="HTTP Status"
          id="statusCode"
          :modelValue="modelValue.statusCode"
          @update:modelValue="$val=>emitUpdate('statusCode',$val)"
          outlined
          toggle-color="primary"
          :options="[
            {label: '200', value: 'text'},
            {label: '300', value: 'json'},
          ]"

        />

        <q-select
          class="col-6"
          label="Content-Type"
          id="mimetype"
          :modelValue="modelValue.contentType"
          @update:modelValue="$val=>emitUpdate('contentType',$val)"
          outlined
          toggle-color="primary"
          :options="[
            {label: 'Text', value: 'text'},
            {label: 'JSON', value: 'json'},
          ]"
        />

      </div>
      <q-input
      label="Content"
      type="textarea"
      :modelValue="modelValue.content"

      @update:modelValue="$val=>emitUpdate('content',$val)"
      outlined/>

  </q-form>
</q-card>
</template>

<script setup>
import {ref} from 'vue'
const props = defineProps(['modelValue','rName','index'])
const emit = defineEmits(['update:modelValue','update:rName'])
//TODO: find better way to do it.
//TODO: find better way to do it.

function emitUpdate(scope,update){
  const updatedValue = {...props.modelValue};
  console.log(update)
  console.log('HELLO',updatedValue)
  updatedValue[scope] = update
  console.log(updatedValue)
  emit('update:modelValue',updatedValue)
}
const loading = ref(false);

// const updateSubProps = Object.keys(props.modelValue) //NOTE: model Value must have all keys present else this is HUGE BUG possiblity
// for(let i = 0; i<updateSubProps; i++)
// {

// }
</script>

<style scoped lang="scss" >
h2{
  padding:0;
  margin:0px;
  font-size: medium;
  line-height: 1lh;
  color: $brown-14;
}
</style>
