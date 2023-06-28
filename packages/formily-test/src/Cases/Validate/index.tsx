import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField, FormConsumer } from '@formily/react';
import { Form, FormItem, NumberPicker } from '@formily/antd';

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    NumberPicker,
    FormItem,
  },
});

const schema = {
  type: 'object',
  properties: {
    aa: {
      title: 'AA',
      required: true,
      'x-reactions': `{{(field) => {
          field.selfErrors =
            field.query('bb').value() >= field.value ? 'AA must be greater than BB' : ''
      }}}`,
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
    },
    bb: {
      title: 'BB',
      required: true,
      'x-reactions': {
        dependencies: ['aa'],
        fulfill: {
          state: {
            selfErrors:
              "{{$deps[0] <= $self.value ? 'AA must be greater than BB' : ''}}",
          },
        },
      },
      'x-component': 'NumberPicker',
      'x-decorator': 'FormItem',
    },
  },
};

const Reaction = () => (
  <Form form={form}>
    <SchemaField schema={schema} />
    <FormConsumer>
      {() => (
        <code>
          <pre>{JSON.stringify(form.values, null, 2)}</pre>
        </code>
      )}
    </FormConsumer>
  </Form>
);
export default Reaction;
