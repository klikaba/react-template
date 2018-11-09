import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from './Home';
import { login } from '../../states/auth/actions';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: id => dispatch(login(id)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home),
);
