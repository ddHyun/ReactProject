import { createContext, useState, useCallback } from 'react';
import { getUserInfo } from '../api/member/login';

//사용자 Context API로 회원정보와 로그인 유무 등의 데이터 저장소
//Context.Consumer는 데이터 조회만 가능하지만 consumer쪽에서도 데이터 업데이트를 할 수 있게 만듦

const initialState = {
  state: { isLogin: false, userInfo: {} },
  action: { setIsLogin: null, setUserInfo: null },
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const updateUserInfo = useCallback(() => {
    if (isLogin) {
      return;
    }

    getUserInfo()
      .then((userInfo) => {
        setIsLogin(true); //로그인 여부
        setIsAdmin(userInfo.type === 'ADMIN'); //관리자 여부
        setUserInfo(() => userInfo);
      })
      .catch((err) => console.log(err));
  }, [isLogin]);

  const value = {
    state: { isLogin, isAdmin, userInfo },
    action: { setIsLogin, setIsAdmin, setUserInfo, updateUserInfo },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;
