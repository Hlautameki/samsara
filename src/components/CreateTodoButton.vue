<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
import { useQuasar } from 'quasar'
export default {
  // name: 'ComponentName',
  setup() {
    const $q = useQuasar()
    function handleButtonClicked() {
      // console.log($q.version)
      $q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text',
        },
      }).onOk(createTodo)
    }
    function createTodo(data) {
      $q.notify({
        message: 'Todo Created',
        icon: 'mdi-check',
        color: 'positive',
      })
    }
    return { handleButtonClicked }
  },
}
</script>
