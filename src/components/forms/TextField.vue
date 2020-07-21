<script lang="ts">
import { VTextField } from 'vuetify/lib'

import { Component,  Prop } from 'vue-property-decorator'

@Component
export default class TextField extends VTextField {
  @Prop({default: 'auto', type: [Boolean, String]}) readonly hideDetails!: boolean|string;
  @Prop({default: true, type: Boolean}) readonly outlined!: boolean;
  @Prop({default: true, type: Boolean}) readonly dense!: boolean
  @Prop({default: 'secondary', type: String}) readonly color!: string
  @Prop({default: () =>[], type: Array}) readonly errorMessages!: string[]
}
</script>
