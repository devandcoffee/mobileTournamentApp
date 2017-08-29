import React from 'react';
import { Container, List, ListItem, Text } from 'native-base';

import { BasicRow, Toolbar, LoadingView } from '../shared';

const REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class TeamListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Toolbar
        navigation={navigation}
        title="My Teams"
        leftButtons={[
          {
            icon: 'menu',
            action: () => {
              navigation.navigate('DrawerOpen');
            }
          }
        ]}
        rightButtons={[
          {
            icon: 'search',
            action: textForFilter => {
              navigation.state.params.filterTeams(textForFilter);
            }
          }
        ]}
      />
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      teams: [],
      filteredTeams: [],
      isFilterActive: false
    };
  }

  componentDidMount() {
    this.fetchTeams();
    this.props.navigation.setParams({
      filterTeams: textForFilter => this.filterTeams(textForFilter)
    });
  }

  fetchTeams() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        const allTeams = this.state.teams.concat(responseData.movies);
        this.setState({
          teams: allTeams,
          isLoaded: true,
          isFilterActive: false
        });
      })
      .done();
  }

  filterTeams(textForFilter) {
    if (this.state.isLoaded) {
      if (textForFilter) {
        const allFilteredTeams = this.state.teams.filter(elemento =>
          elemento.title.toUpperCase().startsWith(textForFilter.toUpperCase())
        );
        this.setState({
          filteredTeams: allFilteredTeams,
          isFilterActive: true
        });
      } else {
        this.setState({
          isFilterActive: false
        });
      }
    }
  }

  renderRow = team =>
    <ListItem
      button
      onPress={() =>
        this.props.navigation.navigate('MyTeamDetail', { id: team.id, title: team.title })}
    >
      <BasicRow mainText={team.title} secondaryText={team.year} />
    </ListItem>;

  render() {
    if (!this.state.isLoaded) {
      return <LoadingView text="Loading from Teams List" />;
    }

    if (this.state.isFilterActive) {
      if (this.state.filteredTeams.length > 0) {
        return (
          <Container>
            <List dataArray={this.state.filteredTeams} renderRow={team => this.renderRow(team)} />
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
          dataArray={this.state.teams}
          renderRow={team => this.renderRow(team)}
          onEndReached={() => {
            this.fetchTeams();
          }}
        />
      </Container>
    );
  }
}

export default TeamListScreen;
