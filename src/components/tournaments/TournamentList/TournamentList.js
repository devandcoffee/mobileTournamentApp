import React from 'react';
import {
  Body,
  Card,
  CardItem,
  List,
  ListItem,
  Text,
} from 'native-base';

import Styles from './Styles';
import { TournamentListRow } from './TournamentListRow';

class TournamentList extends React.Component {  
  createRightSection = (dataSource, columns) => {
    let rightSection = <Body />;  
    const rightSectionColumns = columns.rightSection;
    const rightSectionColumnsLength = rightSectionColumns.length;
    rightSection = rightSectionColumns.map((column, index) => {
      const columnText = column.length > 4 ? 
        column.charAt(0).toUpperCase() : 
        column.toUpperCase();
        
      let columnStyle;      
      if (rightSectionColumnsLength === index + 1) {
        columnStyle = Styles.rightSectionBoldText;
      } else {
        columnStyle = columnText.length === 1 ?
          Styles.rightSectionText : Styles.rightSectionLargeText;
      }      
    
      return <Text key={index} style={columnStyle}>{columnText}</Text>;
    });      
    return rightSection;
  };
  
  renderTournamentListRow = (item, columns) => (
     <ListItem
       button
       // onPress={() => 
       //   this.props.navigation.navigate('TournamentDetail', 
       //     { id: tournament.id, title: tournament.title })} 
     >
       <TournamentListRow rowData={item} columns={columns} />
     </ListItem>
   );
  
  render() {
    const { dataSource, columns } = this.props;
    return (
      <Card>
        <CardItem header>
          <Body style={Styles.leftSection}>
            <Text style={Styles.mainText}>{columns.leftSection[0]}</Text>
          </Body>
          <Body style={Styles.rightSection}>
            { this.createRightSection(dataSource, columns) }
          </Body>
        </CardItem>
        <List
          dataArray={dataSource}
          renderRow={item => this.renderTournamentListRow(item, columns)}
        />
      </Card>
    );
  }
}

export default TournamentList;
