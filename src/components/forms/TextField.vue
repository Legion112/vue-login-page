<script>
import Vue from 'vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
import VTextField from 'vuetify/lib/components/VTextField/VTextField'

// Create Base Mixins and Define Custom Properties
const base = Vue.extend({ mixins: [VTextField] })
export default base.extend({
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    },
    outlined: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
    singleLine: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: 'secondary'
    },
  }
})

</script>