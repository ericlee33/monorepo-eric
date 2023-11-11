import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, Password, Submit } from '@formily/antd';
import * as ICONS from '@ant-design/icons';

const normalForm = createForm({
  validateFirst: true,
});

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
    Password,
  },
  scope: {
    icon(name) {
      return React.createElement(ICONS[name]);
    },
  },
});

const normalSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'array',
      title: 'Username',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      'x-component-props': {
        prefix: "{{icon('UserOutlined')}}",
      },
    },
    password: {
      type: 'string',
      title: 'Password',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Password',
      'x-component-props': {
        prefix: "{{icon('LockOutlined')}}",
      },
    },
  },
};

const Basic = () => {
  return (
    <Form
      form={normalForm}
      layout="vertical"
      size="large"
      onAutoSubmit={console.log}
    >
      <SchemaField schema={normalSchema} />
      <Submit block size="large">
        Login
      </Submit>
    </Form>
  );
};

export default Basic;
