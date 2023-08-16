


<template>
  <q-card class="q-pa-md shadow-2 q-y-md " >
  <q-form>
    <div class=" flex q-my-sm q-gutter-sm">
      <q-select
      label="Method"
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
    <div class="flex q-gutter-sm">
          <q-select
          class="col-4"
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
const props = defineProps(['modelValue','rName'])
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


// const updateSubProps = Object.keys(props.modelValue) //NOTE: model Value must have all keys present else this is HUGE BUG possiblity
// for(let i = 0; i<updateSubProps; i++)
// {

// }
</script>
