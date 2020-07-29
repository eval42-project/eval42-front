import React from 'react';
import { Typography, Avatar } from 'antd';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { RootState } from 'util/redux/rootReducer';
import Login from 'components/organisms/Login';

const { Title } = Typography;

const InfoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;

  & > div {
    margin: 0 20px;
  }
`;

export default function Profile(): React.ReactElement {
  const user = useSelector((state: RootState) => state.user);

  if (user.id === 0) return <Login />;
  return (
    <div>
      <InfoContainer>
        <Avatar size={128} src={user.image_url} />
        <div>
          <Title level={3}>{user.displayname}</Title>
          <Title level={4} style={{ marginTop: '0' }}>{user.login}</Title>
        </div>
      </InfoContainer>
    </div>
  );
}
