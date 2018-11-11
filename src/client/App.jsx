import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import About from './routes/About';
import Contact from './routes/Contact';
import NavigationBar from './components/NavigationBar';
import PublicRoute from './components/PublicRoute';
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
    <Router>
      <div className="app-container">
        <NavigationBar />
        <div className="content-container">
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about" component={About} />
          <ProtectedRoute path="/contact" component={Contact} />
        </div>
      </div>
    </Router>
  </Provider>
);

export default App;
