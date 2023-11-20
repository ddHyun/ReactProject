import JoinForm from '../../components/member/JoinForm';
import React, { useState, useCallback } from 'react';

const JoinContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  //함수 호출시 최초 한번만 호출. 렌더링 때마다 호출되면 데이터 낭비! => useCallback & 두번째 인자는 빈 배열이면 최초 한 번만 호출이라는 의미
  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onChange = useCallback(() => {}, []);

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(JoinContainer);
