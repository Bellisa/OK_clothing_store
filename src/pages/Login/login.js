import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PageInfo } from '../../components/pageInfo';
import { getPageInfo } from '../../services/pageIngo';
import { authUserAsync } from '../../store';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      isValid: false
    };
  }

  validate = (el) => {
    const valid = { email: /^\w+@\w+\.[a-z]{2,}$/, password: /^[^ ]{6,20}$/ };

    if (valid[el.target.id].test(el.target.value)) {
      this.setState({ [`${el.target.id}Error`]: '' });
    } else {
      this.setState({ [`${el.target.id}Error`]: `${el.target.id} is invalid` });
    }
    if (((!this.state.emailError || this.state.emailError.length === 0) && this.state.email.length !== 0) &&
      ((!this.state.passwordError || this.state.passwordError.length === 0) && this.state.password.length !== 0)) {
      this.setState({ isValid: true });
    } else {
      this.setState({ isValid: false });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  submit = (e) => {
    const { email, password } = e.target;
    e.preventDefault();
    this.props.dispatch(authUserAsync({ email: email.value, password: password.value }));
  }
  onBlurControl = (event) => {
    this.validate(event);
  }
  render() {
    return (
      <React.Fragment >
        <PageInfo info={getPageInfo('/Login')} />
        <Form horizontal onSubmit={this.submit}>
          <FormGroup controlId="email">
            <Col componentClass={ControlLabel} sm={2}>
              Email
          </Col>
            <Col sm={3}>
              <FormControl
                autoFocus
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                onBlur={this.onBlurControl}
              />
            </Col>
            <Col sm={2}>
              {
                this.state.emailError && <span className="error-text">{this.state.emailError}</span>
              }
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} sm={2}>
              Password
          </Col>
            <Col sm={3}>
              <FormControl
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.onBlurControl}
              />
            </Col>
            <Col sm={2}>
              {
                this.state.passwordError && <span className="error-text">{this.state.passwordError}</span>
              }
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={3}>
              <Button
                bsStyle="primary"
                block
                disabled={!this.state.isValid}
                type="submit"
              >
                Login
            </Button>
            </Col>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export const Login = connect()(LoginComponent);

