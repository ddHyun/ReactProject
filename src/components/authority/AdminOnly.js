import React, { useContext } from 'react';
import UserContext from '../../modules/User';

const AdminOnly = ({ children }) => {
  const {
    state: { isAdmin },
  } = useContext(UserContext);

  return isAdmin ? children : <h1>접근 권한 없음</h1>;
};

export default React.memo(AdminOnly);
