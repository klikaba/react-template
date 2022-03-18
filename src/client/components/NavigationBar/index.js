import { connect } from 'react-redux';
import NavigationBar from './NavigationBar';
import { logout } from '../../states/auth/actions';

const mapStateToProps = state => ({
  userAuthenticated: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  logout: id => dispatch(logout(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
