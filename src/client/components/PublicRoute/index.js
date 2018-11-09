import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PublicRoute from './PublicRoute';

const mapStateToProps = state => ({
  userAuthenticated: state.auth.isLoggedIn,
});

export default withRouter(
  connect(mapStateToProps)(PublicRoute),
);
