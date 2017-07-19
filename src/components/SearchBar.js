import React from 'react';
import {
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';

export const SearchBar = (props) => {
  const { onBackButtonClicked, handleOnTextChanged } = props;
  const clearText = () => {
    this.textInput.setNativeProps({ text: '' });
  }
  return (
    <Header searchBar rounded>
      <Item>
        <Icon 
          name="arrow-back" 
          onPress={() => {
            onBackButtonClicked();
            handleOnTextChanged('');
          }}
        />
        <Input 
          ref={(component) => {
            this.textInput = component;
          }} 
          placeholder="Search" 
          onChangeText={(text) => {
            handleOnTextChanged(text);
          }}
        />
        <Icon 
          name="close" 
          onPress={() => {
            clearText();
            handleOnTextChanged('');
          }}
        />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  );
}
