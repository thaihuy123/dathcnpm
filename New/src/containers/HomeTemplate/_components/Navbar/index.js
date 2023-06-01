import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-light navbar-light text-secondary shadow p-3 mb-5 bg-white rounded">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassname="active" className="nav-link" to="/san-pham">
                <h5>Sản phẩm</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassname="active" className="nav-link" to="/danh-sach">
                <h5>Danh sách đơn hàng</h5>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassname="active" className="nav-link" to="/quan-ly">
                <h5>Quản lý tài khoản</h5>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

    )
  }
}
