import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Typography } from 'antd';

import 'antd/dist/antd.css';
import LandingHeader from 'components/organisms/LandingHeader';
import Landing from 'components/pages/Landing';
import Profile from 'components/pages/Profile';
import Auth from 'components/pages/Auth';
import Slot from 'components/pages/Slot';
import Forum from 'components/pages/Forum';
import { PROFILE, AUTH, SLOT, FORUM } from 'util/routes';

const { Link } = Typography;
const { Content, Footer } = Layout;

const MainContent = styled(Content)`
  padding: 50px;
  margin-top: 64px;
  min-height: calc(100vh - 134px);
`;

export default function App(): React.ReactElement {
  return (
    <Router>
      <Layout>
        <LandingHeader />
        <MainContent>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path={PROFILE} exact component={Profile} />
            <Route path={SLOT} exact component={Slot} />
            <Route path={FORUM} exact component={Forum} />
            <Route path={AUTH} exact component={Auth} />
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
