import React from 'react';
import propTypes from 'prop-types';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';
import oauthService from '../../services/oauth';

function renderErrors(errors) {
  return errors.map(err => (
    <p key={err}>{err}</p>
  ));
}

function parseSuccessResponse(response) {
  return {
    accessToken: response.access_token,
    refreshToken: response.refresh_token,
    tokenType: response.token_type,
    createdAt: response.created_at,
    expiresIn: response.expires_in,
    userId: response.user_id,
  };
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: '',
        password: '',
      },
      errors: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const { formData } = this.state;
    this.setState({
      formData: {
        ...formData,
        [e.target.name]: e.target.value,
      },
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { formData } = this.state;
    const { history } = this.props;

    oauthService.token(formData)
      .then((response) => {
        const { login } = this.props;
        const payload = parseSuccessResponse(response.data);
        login(payload);
        localStorage.setItem('session', JSON.stringify(payload));
        history.push('/');
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({ errors: ['Incorrect username or password!'] });
        }
      });
  }

  render() {
    const { formData, errors } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-3">
            <br />
            <br />
            <br />
            {!!errors.length && (
              <Alert color="danger">{renderErrors(errors)}</Alert>
            )}

            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="username"
                  value={formData.username}
                  placeholder="Email"
                  onChange={this.onChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="Password"
                  onChange={this.onChange}
                />
              </FormGroup>
              <Button>Login</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
};

export default Login;
