import {StyleSheet} from 'react-native';

const woofCardStyles = StyleSheet.create({
  card: {
    width: 100,
    height: 113,
    //box-shadow on the <WoofCard> for both Android and iOS
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 44/2,
    margin: 10,
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    margin: 7,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default woofCardStyles;