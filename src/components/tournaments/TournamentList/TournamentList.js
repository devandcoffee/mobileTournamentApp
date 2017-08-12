import React from 'react';
import {
  Body,
  Card,
  CardItem,
  List,
  ListItem,
  Text,
} from 'native-base';
import PropTypes from 'prop-types';

import Styles from './Styles';
import { TournamentListRow } from './TournamentListRow';

class TournamentList extends React.Component {
  createRightSection = (dataSource, rightColumns) => {
    let rightSection = <Body />;
    const rightSectionColumnsLength = rightColumns.length;
    rightSection = rightColumns.map((column, index) => {
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

  renderTournamentListRow = (item, leftColumns, rightColumns) => (
     <ListItem
       button
       // onPress={() =>
       //   this.props.navigation.navigate('TournamentDetail',
       //     { id: tournament.id, title: tournament.title })}
     >
       <TournamentListRow rowData={item} leftColumns={leftColumns} rightColumns={rightColumns} />
     </ListItem>
   );

  render() {
    const { dataSource, leftColumns, rightColumns } = this.props;
    return (
      <Card>
        <CardItem header>
          <Body style={Styles.leftSection}>
            <Text style={Styles.mainText}>{leftColumns[0].toUpperCase()}</Text>
          </Body>
          <Body style={Styles.rightSection}>
            { this.createRightSection(dataSource, rightColumns) }
          </Body>
        </CardItem>
        <List
          dataArray={dataSource}
          renderRow={item => this.renderTournamentListRow(item, leftColumns, rightColumns)}
        />
      </Card>
    );
  }
}

TournamentList.propTypes = {
  dataSource: PropTypes.array.isRequired,
  leftColumns: PropTypes.array.isRequired,
  rightColumns: PropTypes.array.isRequired,
};

export default TournamentList;
