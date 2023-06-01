import './App.css';
import DanhSachPage from './containers/HomeTemplate/DanhSachDonHang';
import HomePage from './containers/HomeTemplate/HomePage';

import QuanLyPage from './containers/HomeTemplate/QuanLyTaiKhoan';
import SanPhamPage from './containers/HomeTemplate/SanPham';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound';
import Navbar from './containers/HomeTemplate/_components/Navbar';
import DetailDonHangPage from './containers/HomeTemplate/DetailDonHang';
import CreateAccountPage from './containers/HomeTemplate/QuanLyTaiKhoan/create-account';
function App() {

  return (
    
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ HomePage } />

        <Route path='/san-pham' component={ SanPhamPage  } />

        <Route path='/quan-ly' component={ QuanLyPage } />
        <Route path='/create-account' component={CreateAccountPage} />
        <Route path='/danh-sach' component={ DanhSachPage  } />

        <Route path='/detail/:id' component={ DetailDonHangPage} />

        <Route path='*' component={ PageNotFound } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
