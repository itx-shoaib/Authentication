import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

function Signin() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row m-5">
                            <div className="col-md-2"></div>

                            <div className="col-md-6 border border-secondary p-2">
                                <h1 className="text-center">Authentication</h1>
                                <Form
                                    name="basic"
                                    labelCol={{
                                        span: 8,
                                    }}
                                    wrapperCol={{
                                        span: 16,
                                    }}
                                    style={{
                                        maxWidth: 600,
                                    }}
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="Email"
                                        name="Email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Email!',
                                            },
                                        ]}
                                    >
                                        <Input type="email" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password />
                                    </Form.Item>

                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item
                                        className='text-center'
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Signin
