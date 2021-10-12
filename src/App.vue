<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :age="12" />
  <span>{{ nameRef }}:{{ computedNameRef }}</span>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

interface Config {
  name: string
}

export default defineComponent({
  name: 'App',
  props: {
    age: {
      type: Number as PropType<number>,
    },
    config: {
      type: Object as PropType<Config>,
      required: true,
    },
  },
  components: {
    HelloWorld,
  },
  mounted() {
    console.log(this.nameRef, '------')
  },
  setup(props, { slots, attrs, emit }) {
    // const state = reactive({
    //   name: 'zhu',
    // })
    const nameRef = ref('zhu')

    const computedNameRef = computed(() => {
      return nameRef.value + '2'
    })

    setInterval(() => {
      nameRef.value += '1'
    }, 1000)

    return {
      nameRef,
      computedNameRef,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
