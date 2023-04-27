import React from 'react';

import './App.css';

import Home from './components/screens/Home/Home';
import PrivateRoute from './utils/router/PrivateRoute';
import { Routes, Route } from 'react-router-dom'
import Login from './components/screens/auth/Login/Login';
import Register from './components/screens/auth/Register/Register';
import Auth from './components/screens/auth/Auth';
import { ColorModeContext, useMode } from './theme/index'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LayoutComponent from './components/layout/index';
import SettingsComponent from './components/screens/Settings';
import NewsComponent from './components/screens/News';
import { Favorite } from '@mui/icons-material';
import FavoriteComponent from './components/screens/Favorite';
import WatchListComponent from './components/screens/WatchList';


function App() {
  const [theme, colorMode] = useMode()
  return (
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <LayoutComponent>
          <div className="App">
            <Routes>
              
                <Route element={<PrivateRoute />} >
                  <Route path='/' element={<Home />} />
                  <Route path='/settings' element={<SettingsComponent />} />
                  <Route path='/news' element={<NewsComponent />} />
                  <Route path='/favorite' element={<FavoriteComponent />} />
                  <Route path='/watchlist' element={<WatchListComponent />} />
                </Route>
                <Route path='/login' element={<Auth />} />
                <Route path='/register' element={<Auth />} />
            </Routes>
          </div>
        </LayoutComponent>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
