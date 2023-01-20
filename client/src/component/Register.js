import React from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import Link from "antd/es/typography/Link";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const Navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Success:", values);
        axios
            .post("http://localhost:5011/register", {
                username: values.username,
                email: values.email,
                password: values.password,
            })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        Navigate('/login')
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div
            className="register"
            style={{ width: "500px", margin: "0 auto", padding: "10px", border: "2px solid #eee", }}
        >
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Please input your name!" }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16, }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                            width: "25%",
                        }}
                    >
                        Register

                    </Button>

                </Form.Item>
            </Form>
        </div>
    );
};
export default Register;
