<template>
  <div class="register">
    <v-form class="align-center mx-auto">
      <v-card
        class=""
        max-width="344"
      >
        <v-card-title>Registration</v-card-title>
        <v-card-text
          class="d-flex flex-column align-content-space-around justify-space-around"
        >
          <v-text-field
            label="email"
            outlined
            hide-details="auto"
          />
          <v-text-field
            label="username"
            outlined
            hide-details="auto"
          />
          <v-text-field
            label="password"
            type="password"
            outlined
            hide-details="auto"
          />
        </v-card-text>
        <v-card-actions class="pa-4 d-flex justify-end">
          <BaseBtn
            outlined
            :to="{name: routeLogin}"
          >
            Register
          </BaseBtn>
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
import TextField from '../../components/forms/TextField'
import BaseBtn from '../../components/base/BaseBtn'
import {ROUTE_LOGIN} from '../../router';

@Component({
  components: {
    TextField,
    BaseBtn
  }
})
export default class Home extends Vue {
  routeLogin = ROUTE_LOGIN
}
</script>
<style>
  .register {
    display: flex;
    align-items: center;
  }

</style>
