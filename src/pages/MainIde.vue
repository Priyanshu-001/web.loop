<template>
  <q-layout view="lHh lpr lFf" container style="min-height: 100vh" class="shadow-2 rounded-borders">
    <q-header elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>

          <q-toolbar-title>loop.web</q-toolbar-title>

          <q-btn flat round dense icon="whatshot" />
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md ">
         <div class="row q-gutter-sm " style="min-height: 80vh;">
          <CodeEditor @something="abc=>html = abc"/>
          <q-card class="col">
            <iframe :srcdoc="html" class="full-height full-width">

            </iframe>
          </q-card>

         </div>
        </q-page>
      </q-page-container>

      <!-- <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer> -->
  </q-layout>

</template>

<script setup>
  import {ref} from 'vue'
  import CodeEditor from 'src/components/CodeEditor.vue';
  const html = ref('Hello')
</script>
<style>
textarea{
  resize: none;
}
</style>
