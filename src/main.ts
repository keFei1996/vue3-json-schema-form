import { createApp, defineComponent, h } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import App from './App.vue';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const img = require('./assets/logo.png');
//
// const App = defineComponent({
//   render() {
//     return h('div', { id: 'app' }, [
//       h('img', {
//         alt: 'Vue logo',
//         src: img,
//       }),
//       h(HelloWorld, {
//         msg: 'Welcome to Your Vue.js + TypeScript App',
//         age: 12,
//       }),
//     ]);
//   },
// });

createApp(App).mount('#app');
