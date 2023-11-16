import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import colorNames from '../../styles/colors';

const { primary } = colorNames;

const OuterBox = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 15px;

  .right {
    a {
      display: inline-block;
      border: 1px solid ${primary};
      height: 28px;
      border-radius: 3px;
      line-height: 26px;
      width: 90px;
      color: ${primary};
      font-weight: 700;
      text-align: center;
      margin-left: 5px;

      &.on {
        background: ${primary};
        color: #fff;
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();

  return (
    <OuterBox>
      <div className="left">
        <NavLink to="/">로고</NavLink>
      </div>
      <div className="right">
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
      </div>
    </OuterBox>
  );
};

export default Header;
