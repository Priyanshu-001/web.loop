<template>
  <div ref="editor"></div>
</template>
<script setup>
import { basicSetup, minimalSetup } from 'codemirror';
import {
  EditorView,
  keymap,
  placeholder
} from '@codemirror/view';
import {javascript} from "@codemirror/lang-javascript"
import { useCodeStore } from 'src/stores/codeStore';

const editor = ref()
const myView = ref(null)
import { defineProps, onMounted, toRefs,ref, onUnmounted } from 'vue';

const emit = defineEmits(['something'])
const something = abc=>emit('something',abc)

const codeStore = useCodeStore();
onMounted(()=>{
    myView.value = new EditorView({
    doc: codeStore.js,

    extensions: [basicSetup, javascript(),
          EditorView.updateListener.of(view=>view.docChanged && something(view.state.doc.toString()) )
      ],
    parent: editor.value,


    })
    console.log('MOUNTY')
    // myView.value.updateListener.of(()=>console.log('HIII'))


  })
  onUnmounted(()=>console.log('Unmounty'))
</script>
