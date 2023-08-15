import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60/2
  },
  heading: {
    fontSize: 20,
    margin: 8,
    fontWeight: 'bold',
  },
  home: {
    flex: 1, 
    backgroundColor: '#FAF9FA',
    padding: 8
  },
  authenPage: { //applies to the backgrounds of Login and Registration screens
    flex: 1, 
    backgroundColor: '#FAF9FA'
  }
});

export default homeStyles;