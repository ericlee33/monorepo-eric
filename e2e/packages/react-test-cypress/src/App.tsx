import React, { useState } from 'react';
import { Form, Input, Select } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

export default function App() {
  const [form] = Form.useForm();

  return (
    <div className="App">
      <span id="abc">123</span>
      {/* <Form form={form}>
        <Input />
        <Select style={{ width: 180 }}>
          <Select.Option value="123">123</Select.Option>
        </Select>
      </Form> */}
    </div>
  );
}
