import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { Input } from '../../components/Form/Input/Input';
import {
   Container, SubmitButton, LoginBox, Title,
} from './styles';
import { login } from '../../store/modules/authentication/actions';
import { connect } from 'react-redux';

function LoginPage(props) {
  const { loginAction, user, location, history } = props;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  if (user) {
    const { from } = location.state || { from: { pathname: "/" } };
    history.replace(from)
  }

  function handleSubmit(e) {
    e.preventDefault();
    loginAction(email, password)
  }

  return (
    <Container>
      <LoginBox>
        <form onSubmit={handleSubmit}>
          <Title>
            Sign in
          </Title>
          <Input
            handleChange={(e) => setEmail(e.target.value)}
            value={email}  
            type="email"
            name="email"
          />
          <Input
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            name="password"
          />
          <SubmitButton type="submit" disabled={null}>
            Login
          </SubmitButton>
        </form>
      </LoginBox>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authetication.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loginAction: login }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)