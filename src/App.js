import React from 'react';
import useLocalStorage from 'use-local-storage';



import './App.css';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const selectTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
  }

  return (
     <>
        <div className='app' data-theme={theme}>
          <div className='login'>
            <h1>Login Formu</h1>
            <div className='container'>
              <div className='top'>
              <i className="fa-brands fa-google-plus-g"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-square-twitter"></i>
              <i className="fa-brands fa-apple"></i>
              </div>
              <p className='clean'><span>Or</span></p>
              <form>
                <label>E-mail</label>
                <input type='email' name='email' placeholder='Email'/>
                <label>Şifre</label>
                <input type='password' name='password' placeholder='Şifre'/>
                
                <div className='rememberme'>
                  <input type='checkbox' checked='checked' />
                  <p>Beni Hatırla </p>
                </div>
                <button>Log In</button>
              </form>
              <div className='bottom'>
                <p>Şifreni mi Unuttum</p>
                <a href='/'>Şifreni Sıfırla</a>
              </div>
              <p className='create'>Yeni Hesap Oluştur</p>
            </div>
            <div className='theme-toggle'>
              <h2>Açık-Koyu Tema</h2>
              <i onClick={selectTheme} className="fa-solid fa-toggle-on"></i>
            </div>
          </div>
        </div>
     </>
  );
}

export default App;
