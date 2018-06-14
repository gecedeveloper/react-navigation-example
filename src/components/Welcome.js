import React from 'react';
import { Container, Content, Button, Text } from 'native-base';

const Welcome = (props) => (
  <Container>
    <Content>
      <Text>Bienvenido a Dumbledore! Has login.</Text>
      <Button bordered info onPress={() => props.navigation.navigate('Wizard')}>
        <Text>Login</Text>
      </Button>
    </Content>
  </Container>
);

Welcome.navigationOptions = {
  title: 'Welcome'
};

export default Welcome;
