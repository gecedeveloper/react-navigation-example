import React from 'react';
import { Container, Header, Title, Content, Button, Left, Right, Body, Icon, Text } from 'native-base';

const Profile = () => (
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
      <Text>Actualiza tu Perfil</Text>
    </Content>
  </Container>
);

Profile.navigationOptions = {
  title: 'Profile',
}

export default Profile;
