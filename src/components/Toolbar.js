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
import { View, StyleSheet } from 'react-native';

import { SearchBar } from './SearchBar';

export default class Toolbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isFilterActive: false,
    };
  }

  createButton(button) {
    return (
      <Button 
        transparent 
        onPress={() => {
          if (button.icon === 'search') {
            this.setState({
              isFilterActive: true,
            })
          } else {
            button.action();
          }      
        }}
      >
        <Icon name={button.icon} />
      </Button>
    )
  }
  
  createLeftSection() {
    let leftSection = <Left />;    
    if (this.props.leftButtons) {
      const leftButtons = this.props.leftButtons.map((element) =>
         this.createButton(element)
      );      
      leftSection = (
        <Left>
          <View 
            style={styles.leftSectionStyle}
          >
          { leftButtons }
          </View>
        </Left>
      );
    } 
    return leftSection;
  }
  
  createRightSection() {
    let rightSection = <Right />
    if (this.props.rightButtons) {
      const rightButtons = this.props.rightButtons.map((element) =>       
        this.createButton(element)
      );
      rightSection = (
        <Right>
          <View 
            style={styles.rightSectionStyle}
          >
          { rightButtons }
          </View>
        </Right>
      )
    }
    return rightSection;
  }

  render() {
    if (this.state.isFilterActive) {
      return (
        <SearchBar
            handleOnTextChanged={(text) => {
              const searchButton = 
                this.props.rightButtons.find((element) => element.icon === 'search');
              searchButton.action(text); 
            }}
            onBackButtonClicked={() => {
              this.setState({
                isFilterActive: false,
              })
            }}
        />
      );
    }
    const leftSection = this.createLeftSection();
    const rightSection = this.createRightSection();
    
    return (
      <Header>
        { leftSection }
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        { rightSection }
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  leftSectionStyle: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    alignItems: 'center' 
  },
  rightSectionStyle: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    alignItems: 'center' 
  }
})
