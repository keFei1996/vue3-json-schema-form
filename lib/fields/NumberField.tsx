import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../types'

export default defineComponent({
  name: 'NumberFeild',
  props: FiledPropsDefine,
  setup() {
    return () => <div>Number field</div>
  },
})
