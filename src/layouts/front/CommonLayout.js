import Header from '../../outlines/front/Header';
import Footer from '../../outlines/front/Footer';
import { Outlet } from 'react-router-dom';
import React, { useContext } from 'react';
import MainClassContext from '../../modules/MainClass';

const CommonLayout = () => {
  const { mainClass, update } = useContext(MainClassContext);

  update();

  return (
    <>
      <Header />
      <main className={mainClass}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CommonLayout;
