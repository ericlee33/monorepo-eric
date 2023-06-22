<template>
  <div class="hello" @click="onClickDiv">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, h } from 'vue';
``;
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    onClickDiv: () => {
      console.log(1)
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
