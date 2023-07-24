<template>
  <q-card class="col q-pa-md ">
    <h3>CODE</h3>
    <!-- <q-btn> LEts go</q-btn> -->
    <q-splitter
      v-model="splitterModel"
    >
      <template v-slot:before>
        <!-- {{ splitterModel }}, {{ tab }} -->
        <q-tabs
          v-model="tab"
          vertical
          class="text-accent"
        >
          <q-tab name="HTML" icon="fa-brands fa-html5" class="text-orange" label="HTML"/>
          <q-tab name="CSS" icon="fa-brands fa-css3-alt" class="text-red" label="CSS" />
          <q-tab name="JS" label="JS" icon="fa-brands fa-js" class="text-amber" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <keep-alive>
        <component :is="tabToComponent[tab]" />
      </keep-alive>
         <!-- <HtmlEditor/> -->
      </template>
    </q-splitter>
  </q-card>
</template>

<script setup>
  // import {fromTextArea} from 'codemirror';

  import { defineProps, onMounted, toRefs,ref, computed } from 'vue';
  import HtmlEditor from 'src/components/CodeEditors/HtmlEditor.vue';
  import JsEditor from 'src/components/CodeEditors/JsEditor.vue';

  const props= defineProps(['modelValue'])
  const {modelValue} = toRefs(props)
  const editor = ref()

  const tab= ref('HTML')
  const splitterModel = ref()
  const tabToComponent = {'HTML':HtmlEditor,'JS':JsEditor}
  // const currentTab = computed(()=>tabToComponent[tab.value])
  const currentTab = ref('HtmlEditor')
  console.log(currentTab.value)

</script>
