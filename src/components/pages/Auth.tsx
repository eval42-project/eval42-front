import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { IAuth } from 'components/pages/IAuth';
import LoginLoading from 'components/organisms/LoginLoading';
import { getToken } from 'util/ft_api';
import { setUserToken } from 'util/redux/userSlice';
import { PROFILE } from 'util/routes';

export default function Auth({ location }: IAuth): React.ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const result = getToken(location.search);
    result.then((token) => {
      dispatch(setUserToken(token));
      history.push({
        pathname: PROFILE,
        search: '',
      });
    });
  });

  return <LoginLoading />;
}
