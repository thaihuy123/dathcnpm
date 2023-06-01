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

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/create-account', {
        username,
        password,
        vaiTro,
      });
      
      console.log(response.data); // Kết quả từ API
      
      // Reset các trường thông tin sau khi cập nhật thành công
      setUsername('');
      setPassword('');
      setVaiTro('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoBack = () => {
    history.goBack(); // Quay lại trang trước đó
  };

  return (
    <div>
            <div style={{display:'flex',flexDirection:'row'}}>
            
            <button onClick={handleGoBack} className="back-button" style={{marginLeft:'20px',marginRight:'20px'}}>
                <FaArrowLeft  /> 
            </button>
            <h4>Tạo tài khoản</h4>
        </div>

      <form onSubmit={handleSubmit}>
        <FloatLabelInput
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ border: '1px solid #000000' }}
        />
        <FloatLabelInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FloatLabelInput
          label="Vai trò"
          value={vaiTro}
          onChange={(e) => setVaiTro(e.target.value)}
        />
        <button type="submit">Tạo</button>
      </form>
    </div>
  );
};

export default CreateAccount;
