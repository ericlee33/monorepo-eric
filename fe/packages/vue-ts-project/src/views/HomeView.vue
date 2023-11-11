<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App">
      <div>duoshen</div>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorldWithH.vue"; // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorldTsx'; // @ is an alias to /src
// import HelloWorld from '@/components/Reactive'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
