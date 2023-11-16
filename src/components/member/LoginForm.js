import { InputText } from '../commons/InputStyle';
import { BigButton } from '../commons/ButtonStyle';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi';

const LoginText = styled(InputText)`
  display: block;
  & + & {
    margin-top: 5px;
  }
`;

const FormBox = styled.form`
  width: 300px;
  padding-bottom: 80px;
`;

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
      <LoginText type="text" placeholder={t('아이디')} />
      <LoginText type="password" placeholder={t('비밀번호')} />
      <BigButton type="submit" className="mt5" size="medium">
        {t('로그인')}
      </BigButton>
      <div className="links">
        <Link to="/find_id">
          <FiLock />
          {t('아이디 찾기')}
        </Link>
        <Link to="/find_pw">
          <FiKey />
          {t('비밀번호 찾기')}
        </Link>
        <Link to="/join">
          <FiUserPlus />
          {t('회원가입')}
        </Link>
      </div>
    </FormBox>
  );
};

export default LoginForm;
