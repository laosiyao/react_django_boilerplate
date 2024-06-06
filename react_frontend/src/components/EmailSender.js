import React from 'react';
import { Button, Input, Form, Select, Card, Row, Col } from 'antd';

const EmailSender = () => {
    const handleSend = (values) => {
        // 发送邮件请求
        console.log('Send values:', values);
    };

    return (
        <Card title="福利发放">
            <Form onFinish={handleSend}>
                <Form.Item name="fileType" label="档位选择">
                    <Select>
                        <Select.Option value="file1">礼包01</Select.Option>
                        <Select.Option value="file2">礼包02</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name="itemId" label="道具ID">
                    <Input/>
                </Form.Item>
                <Form.Item name="itemCount" label="数量">
                    <Input/>
                </Form.Item>
                <Form.Item name="emailTitle" label="邮件标题">
                    <Input/>
                </Form.Item>
                <Form.Item name="emailContent" label="邮件内容">
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">发送</Button>
                </Form.Item>
            </Form>
        </Card>
    );
}