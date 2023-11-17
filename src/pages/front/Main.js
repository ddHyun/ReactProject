import UserConsumer from '../../modules/User';
import LoginContainer from '../../containers/member/LoginContainer';

const Main = () => {
  return (
    <UserConsumer>
      {({ isLogin }) => (isLogin ? <h1>메인페이지</h1> : <LoginContainer />)}
    </UserConsumer>
  );
};

export default Main;
