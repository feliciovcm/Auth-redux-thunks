import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProfile } from '../../services/authetication';
import { logout } from '../../store/modules/authentication/actions';
import {
  Box, Container, CustomButton, Title,
} from './styles';

function HomePage(props) {

  const { logoutAction } = props;

  useEffect(() => {
   const profile = getProfile().then(res => res);
  }, [])

  return (
    <Container>
      <Box>
        <Title>
          Obrigado a todos pela presença!
        </Title>
        <CustomButton type="button" onClick={logoutAction}>
          CLICK TO LOGOUT
        </CustomButton>
      </Box>
    </Container>
  );
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ logoutAction: logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
