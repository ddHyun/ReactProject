import React, { useContext } from 'react';
import UserContext from '../../modules/User';
import UnAuthorized from '../commons/UnAuthorized';

const AdminOnly = ({ children }) => {
  const {
    state: { isAdmin },
  } = useContext(UserContext);

  return isAdmin ? children : <UnAuthorized />;
};

export default React.memo(AdminOnly);
