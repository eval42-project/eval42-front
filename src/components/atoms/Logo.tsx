import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { ILogo } from 'components/atoms/ILogo';

const { Title } = Typography;

const LogoContainer = styled.div`
  ${(props: ILogo) => (props.onClick ? 'cursor: pointer;' : '')}
`;

export default function Logo({ onClick }: ILogo): React.ReactElement {
  return (
    <LogoContainer onClick={onClick}>
      <Title level={2} style={{ color: '#FFFFFF', marginBottom: '0px' }}>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '10px' }} />
        Eval42
      </Title>
    </LogoContainer>
  );
}
