import { InputText } from '../commons/InputStyle';
import { BigButton } from '../commons/ButtonStyle';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LoginText = styled(InputText)`
  display: block;
  & + & {
    margin-top: 5px;
  }
`;

const FormBox = styled.form`
  width: 300px;
`;

const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
      <LoginText type="text" placeholder={t('아이디')} />
      <LoginText type="password" placeholder={t('비밀번호')} />
      <BigButton type="submit" size="medium">
        {t('로그인')}
      </BigButton>
    </FormBox>
  );
};

export default LoginForm;
