import React from 'react';
import { Image } from 'react-native';
import {
  Text,
  Container,
  List,
  ListItem,
  Content,
} from 'native-base';

const routes = ['Dashboard', 'Tournament'];
const DRAWER_IMAGE = 'https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/img/drawer-cover.png';
const LOGO_IMAGE = 'https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/master/img/logo.png';

class LeftMenu extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: DRAWER_IMAGE
            }}
            style={{
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: LOGO_IMAGE
              }}
            />
          </Image>
          <List
            dataArray={routes}
            renderRow={data => (
              <ListItem
                button
                onPress={() => navigation.navigate(data)}
              >
                <Text>{data}</Text>
              </ListItem>
            )}
          />
        </Content>
      </Container>
    );
  }
}

export default LeftMenu;
