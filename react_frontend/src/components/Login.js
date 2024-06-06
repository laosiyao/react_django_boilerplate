import React, { useState } from 'react';
import { Button, Input, Form, Row, Col, Card } from 'antd';
import axios from 'axios';

const Login = () => {
  const [captchaUrl, setCaptchaUrl] = useState('/api/captcha');

  const handleLogin = (values) => {
    // 发送登录请求
    axios.post('/api/login', values)
      .then(response => {
        console.log('Login successful:', response.data);
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
  };

  const refreshCaptcha = () => {
    setCaptchaUrl(`/api/captcha?${Date.now()}`);
  };

  return (
    <Card title="后台登陆">
      <Form onFinish={handleLogin}>
        <Form.Item name="username" label="账号">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="密码">
          <Input.Password />
        </Form.Item>
        <Form.Item name="captcha" label="验证码">
          <Row gutter={8}>
            <Col span={12}>
              <Input />
            </Col>
            <Col span={12}>
              <img src={captchaUrl} alt="captcha" onClick={refreshCaptcha} />
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">登陆</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;