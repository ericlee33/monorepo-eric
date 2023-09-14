import { defineComponent } from 'vue';
import { Table } from 'ant-design-vue';
import { request } from '@/utils/request';
import { Select } from 'ant-design-vue';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      items: [1, 2, 3],
      abc: 'abc',
      def: 'def',
      bool: true,
    };
  },
  methods: {
    onClickDiv() {
      this.abc = '123';
    },
  },
  render() {
    // return <div>{this.abc}</div>;
    // v-for
    // return this.items.map((item, index) => <div key={index}>item</div>)
    // return this.bool ? this.abc : this.def;

    return (
      <div
        style={{
          // color: '#fff',
          // backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={this.onClickDiv}
      >
        {/* {this.abc} */}
        {/* <Select
          style={{
            width: 30,
          }}
          dropdownMatchSelectWidth={false}
          options={[
            {
              label: '1232131293219391293219391392193129392139219329',
              value: 12,
            },
          ]}
          value={12}
        /> */}

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
