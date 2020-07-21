<template>
  <h1>{{ message }}}</h1>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class Notification extends Vue {
    @Prop({required: true}) readonly message?: string;
}
</script>

<style scoped>

</style>
