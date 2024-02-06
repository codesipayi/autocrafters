import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
// import { useHistory } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './Login.css';
const { Header, Content, Footer, Sider } = Layout;


const Login = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
//   const history = useHistory();
const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onFinish = (values) => {
    try {
      // Call your login API here and handle success/failure
      // For demonstration, let's assume a simple check
      if (values.username === 'demo' && values.password === 'demo') {
        message.success('Login successful!');
        // history.push('/home');
        // this.props.onLogin();
        onLogin();
        console.log(onLogin);
      } else {
        message.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
        <>
        <Layout className="login-layout">
                <Content className="login-content">
                    <div className="login-form-container">

                        <h2>Login</h2>
                        <Form
                            name="login-form"
                            onFinish={onFinish}
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                        >
                            <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                            <Input />
                            </Form.Item>

                            <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                            <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" loading={loading}>
                                Login
                            </Button>
                            </Form.Item>
                        </Form>
                    </div>
                
                </Content>
                <Footer className="login-footer">
                ©{new Date().getFullYear()} All copyrights reserved
                </Footer>
            </Layout>
        </>

  );
};

export default Login;
