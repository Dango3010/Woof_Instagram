import {StyleSheet} from 'react-native';

const woofPostStyles = StyleSheet.create({
  layout: {
    height: 113,
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    width: 200,
    height: 100,
    borderRadius: 44/2,
    margin: 10
  },
  content: {
    flex: 2,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
});

export default woofPostStyles;