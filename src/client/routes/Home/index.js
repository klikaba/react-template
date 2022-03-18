import { connect } from 'react-redux';
import Home from './Home';
import { login } from '../../states/auth/actions';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: id => dispatch(login(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
