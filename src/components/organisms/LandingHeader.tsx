import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Layout, Menu, message } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

import 'antd/dist/antd.css';
import Logo from 'components/atoms/Logo';
import { removeUserToken } from 'util/redux/userSlice';
import { RootState } from 'util/redux/rootReducer';
import { PROFILE, SLOT, FORUM } from 'util/routes';

const { Header } = Layout;
const { Item } = Menu;

const LogoContainer = styled.div`
  float: left;
  height: 100%;
  margin: 0 30px;
  display: flex;
  align-items: center;
`;

export default function LandingHeader(): React.ReactElement {
  const user = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const [selectedKey, setSelectedKey] = useState(history.location.pathname);

  const goToLanding = () => {
    setSelectedKey('/');
    history.push('/');
  };

  const onMenuClick = ({ key }: MenuInfo) => {
    if (typeof key === 'number') throw new Error('Key of menu is not string');
    setSelectedKey(key);
    if (key === 'logout') {
      dispatch(removeUserToken());
      goToLanding();
      message.success('Logout successfully!');
    } else history.push(key);
  };

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <LogoContainer>
        <Logo onClick={goToLanding} />
      </LogoContainer>
      <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} onClick={onMenuClick}>
        <Item key={PROFILE}>Profile</Item>
        <Item key={SLOT}>Slot</Item>
        <Item key={FORUM}>Forum</Item>
        {user.id !== 0 && <Item key="logout">Logout</Item>}
      </Menu>
    </Header>
  );
}
