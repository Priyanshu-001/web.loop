<template>
  <q-card>
    <q-input
      v-model="html"
      filled
      type="textarea"
    />

     <!-- eslint-disable -->
    <iframe :srcdoc="html" ref="okay">

    </iframe>
  </q-card>
</template>

<script setup>
import { ref,computed,onMounted } from 'vue';
  const html = ref('')
  const okay = ref(null)
  const finalHtml = computed(()=>`<body> ${html.value} </body>`)
  const finalCode = computed(()=>{
    return ``
  })
  onMounted(() => {
  okay.value.con = 'Hello'
})
  // okay.value.innerHTML = ''
</script>
