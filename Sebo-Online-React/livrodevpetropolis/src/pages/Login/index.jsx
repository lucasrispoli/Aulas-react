import React, { useState } from "react";
import * as styles from "./Login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/auth/login',{
        username,
        password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);

      navigate('/inicio');

    }catch (err){
      if (err.response && err.response.status ===401){
        setError('Email ou senha inválidos');
      }else{
        setError('Erro de conexão com a API');
      }

      setTimeout(()=>{
        window.location.reload();
      },2000);
    }finally{
      setLoading(false);
    }
  };


const handleKeyPress = (e) =>{
  if (e.key === 'Enter' && username && password && !loading){
    handleLogin();
  }
};



  return (  
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.header}>
          <h2>Livraria Dev Petropolis</h2>
        </div>

        <div className={styles.line}></div>

        <p>Faça o login para acessar o sistema</p>

        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="email"
              className={styles.input}
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="password" 
              placeholder="password"
              className={styles.input}
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
          </div>

          {error && (
            <div className={styles.errorAlert}>
              {error}
            </div>
          )}

          <button onClick={handleLogin} className={styles.loginBtn} disabled={loading || !username || !password}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>
        
        <div className={styles.footer}>
          <p>Sistema de Sebo Dev</p>
        </div>



      </div>

    </div>
  );
};
