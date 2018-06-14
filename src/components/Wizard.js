import React from 'react';
import { Container, Content, Button, Text } from 'native-base';

const Wizard = (props) => (
  <Container>
    <Content>
      <Text>This is the wizard, you must complete your information here!</Text>
      <Button bordered info onPress={() => props.navigation.navigate('DrawerNav')}>
        <Text>Info Complete</Text>
      </Button>
    </Content>
  </Container>
);

Wizard.navigationOptions = {
  title: 'Wizard'
};

export default Wizard;
