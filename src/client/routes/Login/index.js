import { connect } from 'react-redux';
import { login } from '../../states/auth/actions';
import Login from './Login';

// const mapStateToProps = state => ({
//   isLoggedIn: state.auth.isLoggedIn,
// });

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
