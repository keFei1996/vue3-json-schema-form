import { defineComponent, PropType, provide, reactive } from 'vue'
import { Schema, SchemaTypes } from './types'
import SchemaItems from './SchemaItems'

import { SchemaFormContextKey } from './context'

export default defineComponent({
  name: 'SchemaForm',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true,
    },
    value: {
      required: true,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true,
    },
  },
  setup(props, { slots, emit, attrs }) {
    const handleChange = (v: any) => {
      props.onChange(v)
    }

    const context: any = reactive({
      SchemaItems,
    })

    provide(SchemaFormContextKey, context)

    // let index = 1
    // setInterval(() => {
    //   context.SchemaItems = index++
    // }, 500)
    return () => {
      const { schema, value } = props
      return (
        <SchemaItems
          schema={schema}
          value={value}
          rootSchema={schema}
          onChange={handleChange}
        />
      )
    }
  },
})
