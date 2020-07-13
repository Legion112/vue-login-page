<template>
  <div class="register">
    <v-form 
      class="align-center mx-auto"
      ref="form"
    >
      <v-card
        class=""
        max-width="344"
      >
        <v-card-title>Registration</v-card-title>
        <v-card-text
          class="d-flex flex-column align-content-space-around justify-space-around"
        >
          <TextField
            label="Email"
            v-model="fields.email"
            :rules="[rules.required, rules.email]"
          />
          <TextField
            label="Login"
            v-model="fields.login"
            :rules="[rules.required]"
          />
          <TextField
            v-model="fields.password"
            label="Password"
            type="password"
            :rules="[rules.required]"
          />
          <TextField
            outlined

            v-model="fields.confirm"
            label="Rapid password"
            type="password"
            :rules="[rules.required, rules.confirm(fields.password)]"
          />
        </v-card-text>
        <v-card-actions class="pa-4 d-flex justify-end">
          <v-btn
            outlined
            style="margin-right: auto"
            :to="{name: routeLogin}"
          >
            Login
          </v-btn>
          <v-btn
            outlined
            color="primary"
            @click="submit"
          >
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

    <div />
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {ROUTE_LOGIN} from '@/router';
import {required, email} from '@/components/forms/validation';
import TextField from '@/components/forms/TextField.vue';
import {VForm} from '@/types';
import confirmFactory from '@/components/forms/validation/confirm';

@Component({
  components: {TextField},
  computed: {
    form(): VForm {
      return this.$refs.form as VForm
    }
  }
})
export default class Home extends Vue {
    fields = {
      email: '',
      login: '',
      password: '',
      confirm: '',
    }
    routeLogin: string = ROUTE_LOGIN
    rules = {
      required,
      email,
      confirm: confirmFactory
    }
    submit(){
      if (this.form.validate()) {
        console.log('Form is valid')
        return;
      }
      // TODO send data to the server.
      // show user notification data is not correct
      console.log('Form is not valid')
    }
    form!: VForm
}
</script>
<style>
.register {
    display: flex;
    align-items: center;
}
</style>
