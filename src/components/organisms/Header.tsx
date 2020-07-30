import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css';
import Logo from 'components/atoms/Logo';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUserToken } from 'util/redux/userSlice';
import { RootState } from 'util/redux/rootReducer';

const { Header } = Layout;
const { Item } = Menu;

const LogoContainer = styled.div`
  float: left;
  height: 100%;
  margin: 0 30px;
  display: flex;
  align-items: center;
`;

export default function CustomHeader(): React.ReactElement {
  const user = useSelector((state: RootState) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const onMenuClick = (menu: any) => {
    if (menu.key === 'logout') {
      dispatch(removeUserToken());
      history.push('/');
    }
    else history.push(`/${menu.key}`);
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
        <Item key="profile">Profile</Item>
        <Item key="slot">Slot</Item>
        <Item key="forum">Forum</Item>
        {user.id !== 0 && (<Item key="logout">Logout</Item>)}
      </Menu>
    </Header>
  );
}
