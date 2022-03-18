import { connect } from 'react-redux';
import ProtectedRoute from './ProtectedRoute';

const mapStateToProps = state => ({
  userAuthenticated: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(ProtectedRoute);
