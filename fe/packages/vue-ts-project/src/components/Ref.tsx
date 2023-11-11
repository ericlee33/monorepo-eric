import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const state = reactive({ count: 0 });

    function increment() {
      state.count++;
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment,
    };
  },
  render() {
    return (
      <>
        <div onClick={this.increment}>{this.state.count}</div>
      </>
    );
  },
});
