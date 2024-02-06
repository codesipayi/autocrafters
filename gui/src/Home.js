import React, { useState } from 'react';
import './App.css';
// import { Link, Route, Switch } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StatsDashboardPage from './StatsDashboardPage';
import DashboardPage from './DashboardPage';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  DashboardOutlined
} from '@ant-design/icons';

import { Breadcrumb, Layout, Menu, theme, Tooltip ,Avatar} from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


const Home = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [lastLoggedInTime, setLastLoggedInTime] = useState(new Date());

  const handleLogout = () => {
    // Add any logout logic here
    onLogout();
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" theme="dark" defaultSelectedKeys={['1']} mode="inline" icon={<DashboardOutlined />}>
            <Link to="/reports">Reports</Link>
          </Menu.Item>
          <Menu.Item theme="dark" defaultSelectedKeys={['1']} mode="inline" key="2" icon={<FileOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item theme="dark" defaultSelectedKeys={['1']} mode="inline" key="3" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            textAlign: 'right'
    
          }}>
                <span style={{ fontSize: '14px', padding: '10px 10px' }}>Last Logged-in Time: {lastLoggedInTime.toLocaleString()}</span>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <span style={{ marginLeft: '10px' }}>Demo</span>
                <Tooltip placement="bottom" title={"Log out"}>
                    <LogoutOutlined style={{ fontSize: '20px', padding: '10px 10px' }} onClick={handleLogout} />
                </Tooltip>
          </Header>
          
     
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {/* <h1>Welcome to the Home Page!</h1> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/reports" element={<StatsDashboardPage />} />
              <Route path="/home" element={<StatsDashboardPage />} />
            </Routes>
          </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
           ©{new Date().getFullYear()} All copyrights reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;