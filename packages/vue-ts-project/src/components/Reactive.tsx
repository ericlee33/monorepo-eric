import { defineComponent, reactive, ref, computed } from 'vue';
import { Button } from 'ant-design-vue';
import { request } from '@/utils/request';

// components
// v-for
// v-if

export default defineComponent({
  name: 'HelloWorld',

  setup() {
    const state = reactive({ count: 0, res: '' });

    const increment = async () => {
      state.count++;
      const res = await request('/api/hello', {
        method: 'POST',
        body: {},
      });
      const json = res.json();

      state.res = JSON.stringify(json);
    };

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
    return <div onClick={this.increment}>{this.state.count}</div>;
  },
});
