import React from 'react';
import {
  Body,
  Text,
  Thumbnail,
} from 'native-base';

import Styles from '../Styles';

const TournamentListRow = (props) => {
  const { rowData, columns } = props;
  const leftSectionColumns = columns.leftSection;
  const rightSectionColumns = columns.rightSection;
    
  const createRightSection = () => {
    let rightSection = <Body />;
    const rightSectionColumnsLength = rightSectionColumns.length;
    rightSection = rightSectionColumns.map((key, index) => {
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
          {rowData[leftSectionColumns[0]]}
        </Text>
        <Thumbnail
          square
          small
          style={Styles.image}
          source={{ uri: rowData[leftSectionColumns[1]] }}
        /> 
        <Text style={Styles.mainText}>{rowData[leftSectionColumns[2]]}</Text>
      </Body>
      
      <Body style={Styles.rightSection}>
        { createRightSection() }
      </Body>
    </Body>
  );  
};

export default TournamentListRow;
