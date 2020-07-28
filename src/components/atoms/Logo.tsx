import React from 'react';
import { Typography } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { ILogo } from 'components/atoms/ILogo';

const { Title } = Typography;

export default function Logo({ style }: ILogo): React.ReactElement {
  return (
    <Title level={2} style={style}>
      <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '10px' }} />
      Eval42
    </Title>
  );
}
