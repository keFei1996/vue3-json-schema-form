import { defineComponent, inject } from 'vue'

import { FiledPropsDefine } from '../types'

// import SchemaItems from '../SchemaItems'
//
// console.log(SchemaItems)

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
}

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup() {
    const context = inject('vjsf')

    console.log(context)

    return () => {
      return <div>Object firld</div>
    }
  },
})
