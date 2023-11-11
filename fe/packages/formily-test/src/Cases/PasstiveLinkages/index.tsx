import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField, FormConsumer } from '@formily/react';
import { Form, FormItem, Input, Select } from '@formily/antd';

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Select,
  },
});

const schema = {
  type: 'object',
  properties: {
    showInput: {
      type: 'string',
      title: 'showInput',
      enum: [
        { label: 'show', value: 'visible' },
        { label: 'hide', value: 'none' },
      ],
      default: 'visible',
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      'x-reactions': {
        target: 'input',
        fulfill: {
          state: {
            display: '{{$self.value}}',
          },
        },
      },
    },
    input: {
      type: 'string',
      title: 'Input',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
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
