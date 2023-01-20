import { Button, Form, Input } from 'antd';
import Link from 'antd/es/typography/Link';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();

    const onFinish = (values) => {
        
        console.log("Success:", values);
        axios
          .post("http://localhost:5011/login", {
            email: values.email,
            password: values.password,
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
          Navigate('/form')
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div style={{ width: '100%', margin: '0' }}>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
                style={{ width: '500px', margin: '0 auto', border: '1px solid #eee', padding: '15px' }}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Login;