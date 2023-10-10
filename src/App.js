import { BrowserRouter } from 'react-router-dom';
import './Styles/App.css';
import Navigation from './UI/navigation/Navigation';
import AppRouter from './UI/appRouter/AppRouter';
import { AuthContext } from './context/context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth,setIsAuth] = useState(false);

useEffect (()=> {
  if (localStorage.getItem('auth')){
    setIsAuth(true);
  }
}, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <div className='App'>
          <Navigation />
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
