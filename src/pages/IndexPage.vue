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
      <q-list bordered>
        <q-item>
          <q-item-section side>
            <q-checkbox :model-value="true" />
          </q-item-section>
          <q-item-section> Go shopping</q-item-section>
          <q-item-section side>
            <q-btn
              flat
              round
              size="sm"
              icon="mdi-delete"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <div class="col-xs-3">
      <q-toolbar class="bg-primary">
        <q-btn
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

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      search: '',
    }
  },
})
</script>
