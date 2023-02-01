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
            <section className="h-100">
                <div className="container containerSignin py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-12">
                                        <div className="card-body p-md-5 m-5 text-black">
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
                                                    maxWidth: 700,
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
                                                    // valuePropName="checked"
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin
