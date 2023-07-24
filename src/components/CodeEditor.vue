<template>
  <q-card class="col q-pa-md "  style="min-height: 80vh;max-height:80vh;overflow-y: scroll;">
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
        <component :is="tabToComponent[tab]" @something="doc=>codeStore.pushCode(tab.toLowerCase(),doc)" />
      </keep-alive>
         <!-- <HtmlEditor/> -->
      </template>
    </q-splitter>
  </q-card>
</template>

<script setup>

  import { defineProps, onMounted, toRefs,ref, computed } from 'vue';

  import {useCodeStore} from 'src/stores/codeStore';

  import HtmlEditor from 'src/components/CodeEditors/HtmlEditor.vue';
  import JsEditor from 'src/components/CodeEditors/JsEditor.vue';
  import CssEditor from 'src/components/CodeEditors/CssEditor.vue';


  const props= defineProps(['modelValue'])
  const {modelValue} = toRefs(props)
  const editor = ref()

  const tab= ref('HTML')
  const splitterModel = ref()
  const tabToComponent = {'HTML':HtmlEditor,'JS':JsEditor, 'CSS':CssEditor}

  const codeStore = useCodeStore()
  // console.log(codeStore.pushCode(tab.value.toLowerCase(),))

</script>
