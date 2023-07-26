<template>
  <q-card class="q-pa-md">
  <q-form>
    <q-input name="route" prefix="/qRes/" filled label="Route" v-model="rname" ></q-input>
    <section class="q-my-md">
    <div class="bg-grey-2 q-pa-md flex">
          <label for="minetype">Content Type:  </label>
          <q-spacer></q-spacer>
          <q-btn-toggle
          id="mimetype"
          v-model="model"
          push

          toggle-color="primary"
          :options="[
            {label: 'Text', value: 'Text'},
            {label: 'JSON', value: 'JSON'},
          ]"
        />

      </div >

      <q-input label="content" filled></q-input>
    </section>
    <q-input type="number" v-model.number ="delay" label="Delay" suffix="ms" filled/>


  </q-form>
</q-card>
</template>

<script setup>
import {ref } from 'vue';
const model = ref('JSON')
const delay = ref(0)
const rname = ref('JSON')

</script>
