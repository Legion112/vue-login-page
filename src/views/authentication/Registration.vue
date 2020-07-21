<template>
  <div class="register">
    <v-form 
      class="align-center mx-auto"
      ref="form"
      :disabled="api.loading"
    >
      <v-card
        class=""
        max-width="344"
        :loading="api.loading"
      >
        <v-card-title>Registration</v-card-title>
        <v-card-text
          class="d-flex flex-column align-content-space-around justify-space-around"
        >
          <TextField
            label="Email"
            v-model="api.data.email"
            :rules="[rules.required, rules.email]"
            :error-messages="api.errors.email"
          />
          <TextField
            label="Login"
            v-model="api.data.login"
            :rules="[rules.required]"
          />
          <TextField
            v-model="api.data.password"
            label="Password"
            type="password"
            :rules="[rules.required]"
          />
          <TextField
            outlined

            v-model="api.data.confirm"
            label="Rapid password"
            type="password"
            :rules="[rules.required, rules.confirm(api.data.password)]"
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
            :disabled="api.loading"
            :loading="api.loading"
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
import {ApiSet} from '@/api/ApiSet';

@Component({
  components: {TextField},
  computed: {
    form(): VForm {
      return this.$refs.form as VForm
    }
  }
})
export default class Home extends Vue {
    api = new ApiSet('/api/authentication/register', ()=>({
      email: '',
      login: '',
      password: '',
      confirm: '',
    }));
    routeLogin: string = ROUTE_LOGIN
    rules = {
      required,
      email,
      confirm: confirmFactory
    }
    async submit(){
      if (!this.form.validate()) {
        console.log('Form is not valid')
        return;
      }
      const {ok} = await this.api.submit();
      if (!ok) {
        // TODO show notification error
      } else {
        // TODO go to main page
      }
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
