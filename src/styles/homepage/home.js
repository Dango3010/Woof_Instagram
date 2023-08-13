import {StyleSheet, StatusBar} from 'react-native';

const homeStyles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60/2
  },
  heading: {
    fontSize: 20,
    margin: 8,
    fontWeight: 'bold'
  },
  home: {
    flex: 1, 
    backgroundColor: '#FAF9FA', 
    marginTop: StatusBar.currentHeight || 0
  }
});

export default homeStyles;
