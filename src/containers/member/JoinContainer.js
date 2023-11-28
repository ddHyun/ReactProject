import JoinForm from '../../components/member/JoinForm';
import React, { useState, useCallback } from 'react';
import { produce } from 'immer';
import { useTranslation } from 'react-i18next';

const JoinContainer = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ agree: false });
  const [errors, setErrors] = useState({});

  //함수 호출시 최초 한번만 호출. 렌더링 때마다 호출되면 데이터 낭비! => useCallback & 두번째 인자는 빈 배열이면 최초 한 번만 호출이라는 의미
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /*
      필수항목
      */
      const requiredFields = {
        email: t('NotBlank_email'),
        password: t('NotBlank_password'),
        confirmPassword: t('NotBlank_confirmPassword'),
        name: t('NotBlank_name'),
      };

      const _errors = {};
      let hasError = false; //검증 실패 여부

      for (const field in requiredFields) {
        if (!form[field] || !form[field].trim()) {
          _errors[field] = _errors[field] || [];
          _errors[field].push(requiredFields[field]);

          hasError = true;
        }
      }

      /*
      약관 동의 체크
      */
      if (!form.agree) {
        _errors.agree = _errors.agree || [];
        _errors.agree.push(t('AssertTrue_join_agree'));
        hasError = true;
      }

      if (hasError) {
        setErrors(() => _errors);
        return;
      }

      //오류가 없다면 회원가입 처리
    },
    [form],
  );

  const onChange = useCallback((e) => {
    const target = e.currentTarget;
    setForm(
      produce((draft) => {
        draft[target.name] = target.value;
      }),
    );
  }, []);

  const onToggle = useCallback(() => {
    setForm(
      produce((draft) => {
        draft.agree = !draft.agree;
      }),
    );
  }, []);

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(JoinContainer);
