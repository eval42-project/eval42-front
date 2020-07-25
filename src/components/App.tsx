import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Menu, Typography } from 'antd';

import history from '../history';
import 'antd/dist/antd.css';
import './App.css';
import Logo from './atoms/Logo';
import Landing from './pages/Landing';
import Auth from './pages/Auth';

const { Link } = Typography;
const { Header, Content, Footer } = Layout;
const { Item } = Menu;

const LogoContainer = styled.div`
  float: left;
  height: 100%;
  margin: 0 30px;
  display: flex;
  align-items: center;
`;

export default function App(): React.ReactElement {
  const onMenuClick = (menu: any) => {
    console.log(menu);
    history.push(`/${menu.key}`);
  };

  return (
    <Router>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <LogoContainer>
            <Logo style={{ color: '#FFFFFF', marginBottom: '0px' }} />
          </LogoContainer>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']} onClick={onMenuClick}>
            <Item key="profile">Profile</Item>
            <Item key="slot">Slot</Item>
            <Item key="forum">Forum</Item>
          </Menu>
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, minHeight: 'calc(100vh - 134px)' }}>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/auth" exact component={Auth} />
            <div className="site-layout-background" style={{ margin: '40px 0 0 0', padding: 24, minHeight: '100%' }}>
              <Route path="/profile">Content</Route>
              New
            </div>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Link href="https://github.com/cos18/eval42" target="_blank">
            Github
          </Link>
        </Footer>
      </Layout>
    </Router>
  );
}