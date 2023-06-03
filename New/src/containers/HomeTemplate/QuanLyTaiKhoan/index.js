import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const ManageAccounts = () => {
  const [accountList, setAccountList] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false); // Trạng thái xác nhận xóa
  const [accountIdToDelete, setAccountIdToDelete] = useState(''); // ID của tài khoản cần xóa
  const history = useHistory();
  const [isLoading,setIsLoading] = useState(true);
  const fetchData = async () => {
    
    try {
      
      setIsLoading(true);
      console.log("den fatchApi");
      const response = await axios.get('http://localhost:5000/read-list-account');
      let data = response.json();
      
      console.log(data.data);
      setAccountList(data.data);
      
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateAccount = () => {
    history.push('/create-account'); // Điều hướng sang trang "CreateAccount"
  };

  

  const handleDeleteAccount = (accountId) => {
    setConfirmDelete(true); // Hiển thị xác nhận xóa
    setAccountIdToDelete(accountId); // Lưu ID của tài khoản cần xóa
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false); // Ẩn xác nhận xóa
    setAccountIdToDelete(''); // Xóa ID của tài khoản cần xóa
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/delete-account`,{
        data:{
          id:accountIdToDelete
        }
      });
      console.log(response.data); // Kết quả từ API

      // Xóa tài khoản khỏi danh sách
      setAccountList((prevList) => prevList.filter((account) => account.id !== accountIdToDelete));

      // Ẩn xác nhận xóa và xóa ID của tài khoản cần xóa
      setConfirmDelete(false);
      setAccountIdToDelete('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ paddingLeft: '40px', paddingRight: '40px' }}>
      <div style={{ position: 'relative' }}>
        <h1>Quản lý tài khoản</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: '10px',
            position: 'relative',
          }}
        >
          <div
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#2459AD',
              width: '15%',
              borderRadius: '10px',
            }}
          >
            <h4 style={{ color: '#FFFFFF', textAlign: 'center' }}>Nội bộ nhân viên</h4>
          </div>
          <div
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              backgroundColor: '#2459AD',
              width: '15%',
              borderRadius: '10px',
              position: 'absolute',
              right: '0',
            }}
            onClick={handleCreateAccount}
          >
            <h4 style={{ color: '#FFFFFF', textAlign: 'center' }}>
              <FaPlus className="icon" />
              Tạo tài khoản
            </h4>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '32px',
          paddingRight: '32px',
        }}
      >
       
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>STT</th>
                <th style={tableHeaderStyle}>Tên tài khoản</th>
                <th style={tableHeaderStyle}>Mật khẩu</th>
                <th style={tableHeaderStyle}>Vai trò</th>
                <th style={tableHeaderStyle}>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? "loading" : accountList.data.map((account, index) => (

                <tr key={index}>
                  <td style={tableCellStyle}>{index + 1}</td>
                  <td style={tableCellStyle}>{account.userName}</td>
                  <td style={tableCellStyle}>{account.passWord}</td>
                  <td style={tableCellStyle}>{account.vaiTro}</td>
                  <td style={tableCellStyle}>
                    <FaEdit className="icon"/>
                    <FaTrash className="icon" onClick={() => handleDeleteAccount(account.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
         
        
      </div>

      {confirmDelete && (
        <div style={{ marginTop: '10px' }}>
          <p>Bạn có chắc chắn muốn xóa tài khoản này?</p>
          <button onClick={handleConfirmDelete}>Xác nhận</button>
          <button onClick={handleCancelDelete}>Hủy</button>
        </div>
      )}
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#2459AD',
  color: '#FFFFFF',
  fontSize: '14px',
  height: '36px',
  padding: '8px',
  textAlign: 'left',
};

const tableCellStyle = {
  padding: '8px',
  borderBottom: '1px solid #CCCCCC',
};

export default ManageAccounts;
