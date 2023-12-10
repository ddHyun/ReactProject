import { createContext, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const MainClassContext = createContext({
  mainClass: '',
  setMainClass: null,
});

const MainClassProvider = ({ children }) => {
  const location = useLocation(); //useLocation : location객체 반환. 콘솔로 확인후 필요한 속성값 사용하자

  const [mainClass, setMainClass] = useState('');

  const update = useCallback(() => {
    const path = location.pathname.split('/'); // '/'를 기준으로 분리시키면 [0]번째는 비어있는 ' ' 가 반환. 제거하기 위해서 shift() 사용하기
    path.shift();
    let _mainClass = path.join('_');
    _mainClass = _mainClass ? `${_mainClass}_page` : 'main_page'; // 경로가 '/'만 있는 경우는 main_page로 className 설정하는 게 좋겠지
    setMainClass(() => _mainClass);
  }, [location]);

  const value = { mainClass, setMainClass, update };

  return (
    <MainClassContext.Provider value={value}>
      {children}
    </MainClassContext.Provider>
  );
};

const { Consumer: MainClassConsumer } = MainClassContext;

export { MainClassProvider, MainClassConsumer };

export default MainClassContext;
