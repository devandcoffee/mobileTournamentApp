const Styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  leftSection: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: 5,
  },
  rightSection: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },  
  detailText: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto_medium',    
    fontSize: 12,
    textAlign: 'center',
  },
  image: {
    flex: 3,
  },
  mainText: {
    flex: 5,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto', 
    fontSize: 12,
    marginLeft: 5,    
  },
  rightSectionText: {
    flex: 1,
    textAlign: 'center',
    marginRight: 3,
    fontFamily: 'Roboto',    
    fontSize: 12,
  },
  rightSectionLargeText: {
    flex: 2,
    textAlign: 'center',
    marginRight: 3,
    fontFamily: 'Roboto',    
    fontSize: 12,
  },
  rightSectionBoldText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Roboto_medium',
    fontSize: 12,
  }
};

export default Styles;
