import LoginForm from '../../components/member/LoginForm';

const LoginContainer = ({ setIsLogin, setUserInfo }) => {
  const handleClick = () => {
    setIsLogin(true);
    setUserInfo({ userNm: '이이름' });
  };

  return (
    <>
      <LoginForm />
      <button type="button" onClick={handleClick}>
        로그인상태
      </button>
    </>
  );
};

export default LoginContainer;
