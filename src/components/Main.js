import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

const Main = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Left>
      <Body>
        <Title>Aprendiendo.la</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Text>Bienvenido a Main</Text>
    </Content>
  </Container>
);

Main.navigationOptions = {
  title: 'Main',
}

export default Main;
