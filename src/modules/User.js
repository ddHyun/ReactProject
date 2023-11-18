import { createContext, useState } from 'react';

//사용자 Context API로 회원정보와 로그인 유무 등의 데이터 저장소
//Context.Consumer는 데이터 조회만 가능하지만 consumer쪽에서도 데이터 업데이트를 할 수 있게 만듦

const initialState = {
  state: { isLogin: false, userInfo: {} },
  action: { setIsLogin: null, setUserInfo: null },
};

const UserContext = createContext(initialState);

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const value = {
    state: { isLogin, userInfo },
    action: { setIsLogin, setUserInfo },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;
