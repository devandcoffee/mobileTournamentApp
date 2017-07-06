import React from 'react';
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
} from 'native-base';

export default class Toolbar extends React.Component {

  createLeftButton(){
    return (
      <Left>
        <Button transparent onPress={ () => {
          switch (this.props.leftButtonIcon){
            case 'menu' :
              this.props.navigation.navigate("DrawerOpen");
              break;
            case 'arrow-back' :
              this.props.navigation.goBack();
              break;
          }
        }}>
          <Icon name={this.props.leftButtonIcon} />
        </Button>
      </Left>
    );
  }

  createRightButton(){
    return (
      <Right>
         <Button transparent>
          <Icon name={this.props.rightButtonIcon} />
         </Button>
      </Right>
    );
  }

  render(){
    let leftButton = <Left />;
    if (this.props.leftButtonIcon != null) {
      leftButton = this.createLeftButton();
    }

    let rightButton = <Right />
    if (this.props.rightButtonIcon != null) {
      rightButton = this.createRightButton();
    }

    return (
      <Header>
        { leftButton }
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        { rightButton }
      </Header>
    );
  }
}
