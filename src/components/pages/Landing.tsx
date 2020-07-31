import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { CheckCircleTwoTone, LoginOutlined } from '@ant-design/icons';

import { OAUTH_AUTHORIZE } from 'util/routes';
import { RootState } from 'util/redux/rootReducer';
import { removeUserToken } from 'util/redux/userSlice';

const { Title } = Typography;

const LandingContainer = styled.div`
  height: calc(100vh - 234px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export default function Landing(): React.ReactElement {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  return (
    <LandingContainer>
      <Title>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '20px' }} />
        Eval42
      </Title>
      <Title level={3} style={{ margin: '0 0 50px 0' }}>
        Evaluation Helper @ 42Seoul
      </Title>
      {user.id === 0 ? (
        <a href={OAUTH_AUTHORIZE}>
          <Button type="primary" shape="round" icon={<LoginOutlined />} size="large">
            Login with 42
          </Button>
        </a>
      ) : (
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<LoginOutlined />}
            size="large"
            onClick={() => dispatch(removeUserToken())}
          >
            Logout
          </Button>
        </div>
      )}
    </LandingContainer>
  );
}
