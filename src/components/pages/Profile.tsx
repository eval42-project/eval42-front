import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Typography, Avatar } from 'antd';

import Login from 'components/organisms/Login';
import LoginLoading from 'components/organisms/LoginLoading';
import { RootState } from 'util/redux/rootReducer';
import { Users } from 'util/redux/types';

const { Title } = Typography;

const InfoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;

  & > div {
    margin: 0 20px;
  }
`;

export default function Profile(): React.ReactElement {
  const user: Users = useSelector((state: RootState) => state.user);

  if (user.isLoading) return <LoginLoading />;
  if (user.id === 0) return <Login />;
  return (
    <div>
      <InfoContainer>
        <Avatar size={128} src={user.imageUrl} />
        <div>
          <Title level={3}>{user.displayname}</Title>
          <Title level={4} style={{ marginTop: '0' }}>
            {user.login}
          </Title>
        </div>
      </InfoContainer>
    </div>
  );
}
