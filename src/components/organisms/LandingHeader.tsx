import React from 'react';
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

  const onMenuClick = (menu: MenuInfo) => {
    if (menu.key === 'logout') {
      dispatch(removeUserToken());
      history.push('/');
      message.success('Logout successfully!');
    } else history.push(menu.key as string);
  };

  const onLogoClick = () => {
    history.push('/');
  };

  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <LogoContainer>
        <Logo onClick={onLogoClick} />
      </LogoContainer>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[history.location.pathname.substring(1)]}
        onClick={onMenuClick}
      >
        <Item key={PROFILE}>Profile</Item>
        <Item key={SLOT}>Slot</Item>
        <Item key={FORUM}>Forum</Item>
        {user.id !== 0 && <Item key="logout">Logout</Item>}
      </Menu>
    </Header>
  );
}
