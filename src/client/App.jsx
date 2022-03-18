import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom"
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import About from './routes/About';
import Contact from './routes/Contact';
import NavigationBar from './components/NavigationBar';
import ProtectedRoute from './components/ProtectedRoute';
import { login } from './states/auth/actions';
import store from './store';
import './index.scss';

const userAuthenticated = localStorage.getItem('session');

// sync store with localStorage
if (userAuthenticated) {
  store.dispatch(login(JSON.parse(localStorage.getItem('session'))));
}

const App = () => (
  <Provider store={store}>
      <div className="app-container">
          <NavigationBar />
          <div className="content-container">
              <Routes>
                <Route path="/" exact element={ <Home /> } />
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/contact" element={ <ProtectedRoute component={Contact} />} />
              </Routes>
          </div>
      </div>
  </Provider>
);

export default App;
