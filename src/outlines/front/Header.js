import React, { useContext } from 'react';
import UserContext from '../../modules/User';

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import colorNames from '../../styles/colors';

const { info } = colorNames;

const OuterBox = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  .right {
    a {
      display: inline-block;
      border: 1px solid ${info};
      height: 28px;
      border-radius: 3px;
      line-height: 26px;
      width: 90px;
      color: ${info};
      font-weight: 700;
      text-align: center;
      margin-left: 5px;

      &.on {
        background: ${info};
        color: #fff;
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const {
    state: { isLogin, isAdmin },
  } = useContext(UserContext);

  return (
    <OuterBox>
      <div className="left">
        <NavLink to="/">로고</NavLink>
      </div>
      <div className="right">
        {isLogin ? (
          <>
            <NavLink
              to="/logout"
              className={({ isActive }) => classNames({ on: isActive })}
            >
              {t('로그아웃')}
            </NavLink>
            <NavLink
              to="/mypage"
              className={({ isActive }) => classNames({ on: isActive })}
            >
              {t('마이페이지')}
            </NavLink>
            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('사이트관리')}
              </NavLink>
            )}
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => classNames({ on: isActive })}
            >
              {t('로그인')}
            </NavLink>
            <NavLink
              to="/join"
              className={({ isActive }) => classNames({ on: isActive })}
            >
              {t('회원가입')}
            </NavLink>
          </>
        )}
      </div>
    </OuterBox>
  );
};

export default Header;
