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
import usersService from '../../services/users';
import { parseResponseErrors } from '../../helpers/utils';

function renderErrors(errors) {
  return errors.map(err => (
    <p key={err}>{err}</p>
  ));
}

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: '',
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

    usersService.register({ user: formData })
      .then(() => {
        history.push('/login');
      })
      .catch((err) => {
        if (err.response.status === 422) {
          this.setState({ errors: parseResponseErrors(err.response.data) });
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
                  name="email"
                  value={formData.email}
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
              <Button>Register</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  history: propTypes.object,
};

export default Register;
