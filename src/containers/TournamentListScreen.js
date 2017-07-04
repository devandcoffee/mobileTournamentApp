import React, { Component } from 'react';
import {
  Alert
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  List,
  ListItem,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';

import { NavigationActions } from 'react-navigation';

import styles from '../Styles';
import { LoadingView } from '../presentationals/LoadingView';
import { BasicRow } from '../presentationals/BasicRow';
import { SearchBar } from '../presentationals/SearchBar';
import Toolbar from '../presentationals/Toolbar';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class TournamentListScreen extends Component{

  fetchData(){
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this._data = this._data.concat(responseData.movies);
        this.setState({
          items: this._data,
          loaded: true,
         });
      })
      .done();
  }

  componentDidMount(){
    this.fetchData();
  }

  constructor(props){
      super(props);
      this._data = [];
      this.state = {
        loaded: false,
        items: [],
      };
    }

  render(){
    if (!this.state.loaded) {
      return <LoadingView text='Loading from tournamentList'/>;
    }

    return (
      <Container>
                <List
                   listStyle={styles.listView}
                   dataArray={this.state.items}
                   renderRow={this.renderRow.bind(this)}
                   //initialListSize={2}
                   //renderError={this.renderListError}
                   //enableEmptySections={true}
                   onEndReached={this.whatsOnEnd.bind(this)}/>
      </Container>
    )
  }

  renderRow(tournament, sectionID, rowID) {
    return (
      <ListItem
        button
        onPress={() => this.props.navigation.navigate("TournamentDetail", { title: tournament.title })}>
        <BasicRow
          mainText={tournament.title}
          secondaryText={tournament.year}/>
      </ListItem>
    );
  }

  whatsOnEnd() {
   console.log('fire');
   Alert.alert( 'Alert Title', 'My Alert Msg',
   [ {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
   {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')}, ],
    { cancelable: false } )
    this.fetchData();
 }

}
