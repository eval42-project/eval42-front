import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { Typography, Divider, DatePicker, TimePicker, Button, message } from 'antd';
import { PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

import Login from 'components/organisms/Login';
import LoginLoading from 'components/organisms/LoginLoading';
import { RootState } from 'util/redux/rootReducer';
import { Users } from 'util/redux/types';
import { createSlot } from 'util/ft_api';
import {
  MomentRange,
  disabledHours,
  disabledMinutes,
  disabledDate,
  getLimitMoment,
  isTimeRangeValid,
} from 'util/SlotControl';

const { Title, Text, Link } = Typography;
const { RangePicker } = TimePicker;

const SlotContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

export default function Slot(): React.ReactElement {
  const user: Users = useSelector((state: RootState) => state.user);
  const [date, setDate] = useState(moment());
  const [timeRange, setTimeRange] = useState(['', '']);

  const onButtonClick = () => {
    if (!isTimeRangeValid(timeRange)) {
      message.error('Time is not vaild. Check slot form!');
      return;
    }
    message.loading('Creating slots...');
    try {
      createSlot(user, date, timeRange).then(() => message.success('Creating slots complete!'));
    } catch (err) {
      message.error('Creating slots failed!');
      console.log(err);
    }
  };

  if (user.isLoading) return <LoginLoading />;
  if (user.id === 0) return <Login />;
  return (
    <SlotContainer>
      <Title level={3}>
        {' '}
        <PlusCircleOutlined /> Create Slot
      </Title>
      <DatePicker
        onChange={(changeDate: moment.Moment | null) => setDate(changeDate!)}
        disabledDate={disabledDate}
        defaultValue={getLimitMoment()}
        size="large"
      />
      <RangePicker
        picker="time"
        format="HH:mm"
        minuteStep={15}
        size="large"
        onChange={(_v: MomentRange | null, formatString: string[]) => setTimeRange(formatString)}
        disabledHours={() => disabledHours(date)}
        disabledMinutes={(hour: number) => disabledMinutes(hour, date)}
      />
      <Button type="primary" size="large" onClick={onButtonClick}>
        Create
      </Button>
      <Title level={4} style={{ marginTop: '10px' }}>
        <Link href="https://profile.intra.42.fr/slots" target="_blank">
          Intra Slot Page
        </Link>
      </Title>
      <Divider style={{ borderTopColor: '#cccccc' }} />
      <Title level={4}>
        <InfoCircleOutlined style={{ color: '#1890ff' }} /> Currently only slot creation is possible.
      </Title>
      <Text>More utils comming soon...</Text>
    </SlotContainer>
  );
}
