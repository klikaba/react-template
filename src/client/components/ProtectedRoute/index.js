import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const mapStateToProps = state => ({
  userAuthenticated: state.auth.isLoggedIn,
});

export default withRouter(
  connect(mapStateToProps)(ProtectedRoute),
);
