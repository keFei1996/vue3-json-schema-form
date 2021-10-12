import { createApp, defineComponent, h, reactive } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
// import App from './App.vue'
import App from '@/App.tsx'

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const img = require('./assets/logo.png')
//
// const App = defineComponent({
//   setup() {
//     const state = reactive({
//       name: 'zhu',
//     })
//
//     setInterval(() => {
//       state.name += '1'
//     }, 1000)
//
//     return () => {
//       return h('div', { id: 'app' }, [
//         h('img', {
//           alt: 'Vue logo',
//           src: img,
//         }),
//         h('p', state.name),
//       ])
//     }
//   },
// })

createApp(App).mount('#app')
