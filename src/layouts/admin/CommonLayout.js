import Header from '../../outlines/admin/Header';
import Footer from '../../outlines/admin/Footer';
import AdminOnly from '../../components/authority/AdminOnly';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
  return (
    <AdminOnly>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </AdminOnly>
  );
};

export default CommonLayout;
