import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  text: {
    fontSize: 14, 
    fontWeight: 'bold', 
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  button: {    
    marginTop: 17,
    width: 170,
    marginLeft: 130,
    height: 40, 
    backgroundColor: '#f6f0bc',
    flex: 1,
    justifyContent: 'center', 
    padding: 2,
  }
});

export default buttonStyles;

