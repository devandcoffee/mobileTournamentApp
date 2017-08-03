import React from 'react';
import {
  Container,
  List,
  ListItem,
  Text,
} from 'native-base';

import styles from '../../styles/Styles';
import { BasicRow, Toolbar, LoadingView } from '../shared';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class TournamentListScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
      header: (
        <Toolbar 
            navigation={navigation} 
            title="Tournaments" 
            leftButtons={[
              {
                icon: 'menu',
                action: () => { navigation.navigate('DrawerOpen'); }
              }
            ]}
            rightButtons={[
              {
                icon: 'search',
                action: (text) => { navigation.state.params.filterTournaments(text); }
              }
            ]}          
        />
      )      
  }) 

  constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        tournaments: [],
        filteredTournaments: [],
        isFilterActive: false,
      };
    }   
    
  componentDidMount() {
    this.fetchData();
    this.props.navigation.setParams({
      filterTournaments: (text) => this.filterTournaments(text),
    });
  } 
  
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {        
        const allTournaments = this.state.tournaments.concat(responseData.movies);
        this.setState({
          tournaments: allTournaments,          
          isLoaded: true,
          isFilterActive: false,
         });
      })
      .done();
  }
  
  filterTournaments(text) { 
    if (this.state.isLoaded) {
      if (text) {
        const allFilteredTournaments = 
          this.state.tournaments.filter((elemento) =>
           elemento.title.toUpperCase().startsWith(text.toUpperCase()));
        this.setState({
          filteredTournaments: allFilteredTournaments,
          isFilterActive: true,
         });
      } else {
        this.setState({
          isFilterActive: false,
         });
      }
    }       
  }
  
  renderRow = (tournament) => (
      <ListItem
        button
        onPress={() =>
          this.props.navigation.navigate('TournamentDetail',
            { id: tournament.id, title: tournament.title })}
      >
        <BasicRow
          mainText={tournament.title}
          secondaryText={tournament.year}
        />
      </ListItem>
    );
     
    render() {
      if (!this.state.isLoaded) {
        return <LoadingView text='Loading from tournamentList' />;
      }      
            
      if (this.state.isFilterActive) {
        if (this.state.filteredTournaments.length > 0) {
          return (
            <Container>
              <List
                 listStyle={styles.listView}
                 dataArray={this.state.filteredTournaments}
                 renderRow={item => this.renderRow(item)}
              />
            </Container>
          );
        }
        return (
          <Container>
            <Text>Empty List</Text>
          </Container>
        );
      }       
      return (
        <Container>
          <List
             listStyle={styles.listView}
             dataArray={this.state.tournaments}
             renderRow={item => this.renderRow(item)}
             //initialListSize={2}
             //renderError={this.renderListError}
             //enableEmptySections={true}
             onEndReached={() => { this.fetchData(); }}
          />
        </Container>
      );
    }
}
