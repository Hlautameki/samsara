<template>
  <q-page class="row">
    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          :model-value="search"
          borderless
          class="full-width"
          dense
          placeholder="search"
        >
          <template #append>
            <q-icon name="mdi-magnify"></q-icon>
          </template>
        </q-input>
      </q-toolbar>
      <TodosList bordered />
    </q-card>
    <div class="col-xs-3">
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          icon="mdi-plus"
          fab
          color="secondary"
          style="margin-bottom: -42px"
          class="q-ml-lg"
        />
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CreateTodoButton from 'components/CreateTodoButton.vue'
import TodosList from 'components/TodosList.vue'

export default defineComponent({
  name: 'IndexPage',
  components: { TodosList, CreateTodoButton },
  data() {
    return {
      search: '',
    }
  },
})
</script>
