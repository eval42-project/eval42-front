import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Typography } from 'antd';

import 'antd/dist/antd.css';
import Header from 'components/organisms/Header';
import Landing from 'components/pages/Landing';
import Profile from 'components/pages/Profile';
import Auth from 'components/pages/Auth';

const { Link } = Typography;
const { Content, Footer } = Layout;

const MainContent = styled(Content)`
  padding: 0 50px;
  margin-top: 64px;
  min-height: calc(100vh - 134px);
`;

export default function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
        <Header />
        <MainContent>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </MainContent>
        <Footer style={{ textAlign: 'center' }}>
          <Link href="https://github.com/cos18/eval42" target="_blank">
            Github
          </Link>
        </Footer>
      </Layout>
    </Router>
  );
}
