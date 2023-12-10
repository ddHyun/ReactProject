import React, { useContext } from 'react';
import LoginContainer from '../../containers/member/LoginContainer';
import UserContext from '../../modules/User';

const MemberOnly = ({ children }) => {
  const {
    state: { isLogin },
  } = useContext(UserContext);

  return isLogin ? children : <LoginContainer />;
};

export default React.memo(MemberOnly);
