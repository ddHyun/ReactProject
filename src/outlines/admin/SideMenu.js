import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <aside>
      <NavLink to="/admin/config">{t('사이트 설정')}</NavLink>
      <NavLink to="/admin/member">{t('회원 관리')}</NavLink>
    </aside>
  );
};

export default React.memo(SideMenu);
