import React, { useState } from 'react';
import './App.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Login from './Login';
import Home from './Home';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLoginStatusChange = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div>
      {isLoggedIn ? (
        // Render Home Component when logged in
        <Home onLogout={() => handleLoginStatusChange(false)} />
      ) : (
        // Render Login Component when not logged in
        <Login onLogin={() => handleLoginStatusChange(true)} />
      )}
    </div>
  );
// };

  // if(!isLoggedIn )
  //   return (<Login />);

  // return (
  //   <Layout
  //     style={{
  //       minHeight: '100vh',
  //     }}
  //   >
  //     <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
  //       <div className="demo-logo-vertical" />
  //       <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
  //     </Sider>
  //     <Layout>
  //       <Header
  //         style={{
  //           padding: 0,
  //           background: colorBgContainer,
  //         }}
  //       />
  //       <Content
  //         style={{
  //           margin: '0 16px',
  //         }}
  //       >
  //         <Breadcrumb
  //           style={{
  //             margin: '16px 0',
  //           }}
  //         >
  //           <Breadcrumb.Item>User</Breadcrumb.Item>
  //           <Breadcrumb.Item>Bill</Breadcrumb.Item>
  //         </Breadcrumb>
  //         <div
  //           style={{
  //             padding: 24,
  //             minHeight: 360,
  //             background: colorBgContainer,
  //             borderRadius: borderRadiusLG,
  //           }}
  //         >
  //           Bill is a cat.
  //         </div>
  //       </Content>
  //       <Footer
  //         style={{
  //           textAlign: 'center',
  //         }}
  //       >
  //          ©{new Date().getFullYear()} All copyrights reserved
  //       </Footer>
  //     </Layout>
  //   </Layout>
  // );
};
export default App;