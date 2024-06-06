import React from 'react';
import { Button, Input, Form, Card } from 'antd';

const RoleSearch = () => {
  const handleSearch = (values) => {
    // 发送角色查询请求
    console.log('Search values:', values);
  };

  return (
    <Card title="指定玩家查询&发放">
      <Form onFinish={handleSearch} layout="inline">
        <Form.Item name="server" label="服务器">
          <Input />
        </Form.Item>
        <Form.Item name="roleName" label="角色名">
          <Input />
        </Form.Item>
        <Form.Item name="roleId" label="角色ID">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">查询</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RoleSearch;