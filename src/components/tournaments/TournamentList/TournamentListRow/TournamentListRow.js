import React from 'react';
import {
  Body,
  Text,
  Thumbnail,
} from 'native-base';
import PropTypes from 'prop-types';

import Styles from '../Styles';

const TournamentListRow = (props) => {
  const { rowData, leftColumns, rightColumns } = props;

  const createRightSection = () => {
    let rightSection = <Body />;
    const rightSectionColumnsLength = rightColumns.length;
    rightSection = rightColumns.map((key, index) => {
      let columnTextStyle;
      if (rightSectionColumnsLength === index + 1) {
        columnTextStyle = Styles.rightSectionBoldText;
      } else {
        columnTextStyle = rowData[key].lenght > 3 ?
          Styles.rightSectionLargeText : Styles.rightSectionText;
      }

      return <Text key={key} style={columnTextStyle}>{rowData[key]}</Text>;
    });
    return rightSection;
  };

  return (
    <Body style={Styles.container}>
      <Body style={Styles.leftSection}>
        <Text
          style={Styles.detailText}
        >
          {rowData[leftColumns[0]]}
        </Text>
        <Thumbnail
          square
          small
          style={Styles.image}
          source={{ uri: rowData[leftColumns[1]] }}
        />
        <Text style={Styles.mainText}>{rowData[leftColumns[2]]}</Text>
      </Body>

      <Body style={Styles.rightSection}>
        { createRightSection() }
      </Body>
    </Body>
  );
};

TournamentListRow.propTypes = {
  rowData: PropTypes.object.isRequired,
  leftColumns: PropTypes.array.isRequired,
  rightColumns: PropTypes.array.isRequired,
};

export default TournamentListRow;
