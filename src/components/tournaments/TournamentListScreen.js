import React, { Component } from 'react';
import {
  Alert
} from 'react-native';
import {
  Container,
  List,
  ListItem,
} from 'native-base';

import styles from '../../styles/Styles';
import { LoadingView } from '../LoadingView';
import { BasicRow } from '../BasicRow';
import { SearchBar } from '../SearchBar';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class TournamentListScreen extends Component {

  constructor(props) {
      super(props);
      this._data = [];
      this.state = {
        loaded: false,
        items: [],
      };
    }   
    
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
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
  
  
  handleEndReached() {
     console.log('fire');
     Alert.alert( 'Alert Title', 'My Alert Msg',
     [ {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => console.log('OK Pressed')},],
      { cancelable: false } )
      this.fetchData();
   }

  renderRow(tournament, sectionID, rowID) {
      return (
        <ListItem
          button
          onPress={() => 
            this.props.navigation.navigate('TournamentDetail', { title: tournament.title })} 
        >
          <BasicRow
            mainText={tournament.title}
            secondaryText={tournament.year}
          />
        </ListItem>
      );
    }

  render() {
    if (!this.state.loaded) {
      return <LoadingView text='Loading from tournamentList' />;
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
                   onEndReached={this.handleEndReached.bind(this)} />
      </Container>
    )
  }
}
