import { defineComponent, reactive, ref, computed } from 'vue';
import { Button } from 'ant-design-vue';

// components
// v-for
// v-if

export default defineComponent({
  name: 'HelloWorld',

  setup() {
    // const state = reactive({ count: 0 });
    const state = ref(0);

    function increment() {
      state.value.count++;
    }

    // const publishedBooksMessage = computed(() => {
    //   return author.books.length > 0 ? 'Yes' : 'No'
    // })

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment,
    };
  },
  render() {
    // return <div onClick={this.increment}>{this.state.count}</div>;
    return <Button>123</Button>;
  },
});
