<template>
  <v-app>
    <div>
      <Notification message="Data has bean sent" />
    </div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2"> {{ $t('release') }}</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container class="main-container">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import {Component, Vue} from 'vue-property-decorator';
import Notification from '@/components/core/notification/Notification.vue';

@Component({ components: {
  Notification,
  HelloWorld,
}})
export default class App extends Vue{


}
</script>
<i18n>
{
  "en": {
    "release": "Latest Release"
  }
}
</i18n>
<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 64px - 12px);
}
</style>
