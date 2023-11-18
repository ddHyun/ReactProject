import LoginContainer from '../../containers/member/LoginContainer';
import UserContext from '../../modules/User';
import { useContext } from 'react';

const Main = () => {
  //const value = useContext(UserContext);
  const {
    state: { isLogin, userInfo },
    action: { setIsLogin, setUserInfo },
  } = useContext(UserContext);

  return isLogin ? (
    <h1>메인페이지 : {userInfo.userNm}</h1>
  ) : (
    <LoginContainer setIsLogin={setIsLogin} setUserInfo={setUserInfo} />
  );
};

export default Main;
