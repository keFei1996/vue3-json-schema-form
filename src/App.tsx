import { defineComponent, h, reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('./assets/logo.png')

function returnHelloWorld(num: number) {
  return <HelloWorld age={num} />
}
const App = defineComponent({
  setup() {
    const state = reactive({
      name: 'xin',
    })

    // setInterval(() => {
    //   state.name += '1'
    // }, 1000)

    return () => {
      return (
        <div id="app">
          <img src={img} alt="Vue logo" />
          <p>{state.name}</p>
          <input type="text" v-model={state.name} />
          {returnHelloWorld(12)}
        </div>
      )
    }
  },
})

export default App
