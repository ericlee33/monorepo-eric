import { defineComponent } from 'vue';
import { Table } from 'ant-design-vue';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      items: [1, 2, 3],
      duoshen: 'duoshen',
      eric: 'eric',
      bool: true,
    };
  },
  methods: {
    onClickDiv() {
      this.duoshen = 'eric';
    },
  },

  render() {
    // return <div>{this.duoshen}</div>;
    // v-for
    // return this.items.map((item, index) => <div key={index}>item</div>)
    // return this.bool ? this.duoshen : this.eric;

    return (
      <div onClick={this.onClickDiv}>
        {this.duoshen}

        {this.$slots.default?.()}
      </div>
    );
  },
});

// {
/* <Table />
        {this.items.map((t) => (
          <div onClick={onClickDiv} key={t}>
            {t}
          </div>
        ))} */
// }
