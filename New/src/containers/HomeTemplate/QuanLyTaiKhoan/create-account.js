import React, { useState } from 'react';
import axios from 'axios';
import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

const FloatLabelInput = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`float-label-input ${isFocused || value ? 'focused' : ''}`}>
      <label className="label">{label}</label>
      <input
        className="input"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [vaiTro, setVaiTro] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/create-account', {
        data:{username,
        password,
        vaiTro}
      });
      
      console.log(response.data); // Kết quả từ API
      
      // Reset các trường thông tin sau khi cập nhật thành công
      setUsername('');
      setPassword('');
      setVaiTro('');
      
      // Hiển thị thông báo thành công
      setSuccessMessage('Tạo tài khoản thành công!');
      
      // Chuyển hướng sau khi tạo tài khoản thành công (ví dụ: trang danh sách tài khoản)
      history.push('/account-list');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoBack = () => {
    history.goBack(); // Quay lại trang trước đó
  };

  return (
    <div style={{marginLeft:20,marginRight:20}}>
      <div style={{display:'flex',flexDirection:'row'}}>
        <button onClick={handleGoBack} className="back-button">
          <FaArrowLeft  /> 
        </button>
        <h4>Tạo tài khoản</h4>
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}
    <div style={{position:'relative',display:'flex',justifyContent:'center',flexDirection:'column'
      ,alignItems:'center',width:'100%'}}>
      <form onSubmit={handleSubmit} >
      <label htmlFor='username'>Tên tài khoản</label>
       <div style={inputFeild} id='username'>
                   
                      <input
                       style={inputType}
                        type="text"
                        name="userName"
                        placeholder="Tên tài khoản"
                      ></input>
                    </div>

                    <label htmlFor='username'>Mật khẩu:</label>
       <div style={inputFeild} id='password'>
                   
                      <input
                       style={inputType}
                        type="text"
                        name="passWord"
                        placeholder="Mật khẩu"
                      ></input>
                    </div>
                    <label htmlFor='username'>Vai trò</label>
       <div style={inputFeild} id='vaitro'>
                   
                      <input
                       style={inputType}
                        type="text"
                        name="vaitro"
                        placeholder="Vai trò"
                      ></input>
                    </div>
      </form>
     
      </div>
      <div style={{marginTop:20}}>
      <button type="submit" style={{position:'absolute',right:20,borderRadius:'1 solid black'}}>Tạo</button>
      </div>
    </div>
  );
};
const inputFeild ={
  width: "100%",
  height: 40,
  display: "flex",
  backgroundColor: "#f0f0f0",
  borderRadius: 20,
  alignItems: "center",
  padding: "0 8px",
};
const inputType ={
  border: "none",
      outline: "none",
      backgroundColor: "#f0f0f0",
      color: "#500",
      fontSize: "16px",
      fontWeight: "600",
      width: "100%",
      borderRadius: "20px",
      padding: "10px",}

export default CreateAccount;
