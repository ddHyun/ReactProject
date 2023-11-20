import { useTranslation } from 'react-i18next';
import { SubTitle } from '../commons/TitleStyle';
import { ButtonGroup, BigButton } from '../commons/ButtonStyle';
import { InputText } from '../commons/InputStyle';
import sizeNames from '../../styles/sizes';

import styled from 'styled-components';

import { FiSquare, FiCheckSquare } from 'react-icons/fi';

const { small, medium } = sizeNames;

const FormBox = styled.form`
  dl {
    display: flex;
    padding: 10px 15px;

    dt {
      width: 130px;
      font-size: ${medium};
      font-weight: bold;
      align-items: center;
    }

    dd {
      flex-grow: 1;
    }
  }

  dl + dl {
    border-top: 1px solid #d5d5d5;
  }

  .terms {
    border: 1px solid #d5d5d5;
    height: 150px;
    padding: 10px;
    overflow: auto;
    font-size: ${small};
  }
`;

const JoinForm = () => {
  const { t } = useTranslation();

  return (
    <FormBox>
      <dl>
        <dt>{t('이메일')}</dt>
        <dd>
          <InputText type="email" name="email" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호')}</dt>
        <dd>
          <InputText type="password" name="password" />
        </dd>
      </dl>
      <dl>
        <dt>{t('비밀번호 확인')}</dt>
        <dd>
          <InputText type="password" name="confirmPassword" />
        </dd>
      </dl>
      <dl>
        <dt>{t('회원명')}</dt>
        <dd>
          <InputText type="text" name="name" />
        </dd>
      </dl>
      <dl>
        <dt>{t('휴대전화번호')}</dt>
        <dd>
          <InputText type="text" name="mobile" />
        </dd>
      </dl>
      <SubTitle align="center" border_width={1}>
        {t('회원가입 약관')}
      </SubTitle>
      <pre className="terms">회원가입약관 공간...</pre>
      <div className="agree_terms">
        <FiSquare />
        {t('회원 약관에 동의합니다.')}
      </div>
      <ButtonGroup>
        <BigButton
          type="submit"
          color="black"
          bcolor="black"
          height={50}
          size="medium"
        >
          {t('가입하기')}
        </BigButton>
        <BigButton
          type="reset"
          color="white"
          bcolor="black"
          fcolor="black"
          height={50}
          size="medium"
        >
          {t('다시입력')}
        </BigButton>
      </ButtonGroup>
    </FormBox>
  );
};

export default JoinForm;