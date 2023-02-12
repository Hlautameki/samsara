<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn @click="changeValue">
      Change value
    </q-btn>
    <div>
      {{lorem}}
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import axios from "axios";

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const lorem = ref("Lorem bla bla")

    function changeValue() {
      // lorem.value = lorem.value + "1";
      axios.get("https://catfact.ninja/fact")
        .then((response) => {lorem.value = response.data.fact})
    }

    // expose to template and other options API hooks
    return {
      lorem,
      changeValue
    }
  }
})
</script>
