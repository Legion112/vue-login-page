<script>
import Vue from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import VBtn from 'vuetify/lib/components/VBtn/VBtn'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VBtn] })
export default base.extend({
  props: {
    outlined: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
  }
})

</script>