import { defineComponent, h, reactive, ref, Ref } from 'vue'

import { createUseStyles } from 'vue-jss'

import MonacoEditor from '@/components/MonacoEditor'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

const useStyle = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

const App = defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {}
      schemaRef.value = schema
    }

    return () => {
      const code = toJson(schemaRef.value)

      return (
        <div>
          <MonacoEditor code={code} onChange={handleCodeChange} />
        </div>
      )
    }
  },
})

export default App
