import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const CommonLayout = () => {
  const location = useLocation(); //useLocation : location객체 반환. 콘솔로 확인후 필요한 속성값 사용하자
  const path = location.pathname.split('/'); // '/'를 기준으로 분리시키면 [0]번째는 비어있는 ' ' 가 반환. 제거하기 위해서 shift() 사용하기
  path.shift();
  let mainClass = path.join('_');
  mainClass = mainClass ? `${mainClass}_page` : 'main_page'; // 경로가 '/'만 있는 경우는 main_page로 className 설정하는 게 좋겠지

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
