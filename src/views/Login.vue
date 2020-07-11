<template>
  <div class="login">
    <v-form class="align-center mx-auto">
      <v-card
        class=""
        max-width="344"
      >
        <v-card-title>Login</v-card-title>
        <v-card-text class="d-flex flex-column align-center justify-space-around">
          <VTextField
            label="username"
            outlined
            hide-details="auto"
          />
          <VTextField
            label="password"
            type="password"
            outlined
            hide-details="auto"
            class="mt-4"
          />
        </v-card-text>
        <v-card-actions class="pa-4 d-flex justify-end">
          <BaseBtn
            outlined
          >
            Login
          </BaseBtn>
        </v-card-actions>
      </v-card>
    </v-form>

    <div />
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator'
import TextField from '../components/forms/TextField'
import BaseBtn from '../components/base/BaseBtn'

@Component({
  components: {
    TextField,
    BaseBtn
  }
})
export default class Home extends Vue {
}
</script>
<style>
  .login {
    display: flex;
    align-items: center;
  }
</style>
