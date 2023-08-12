import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  submitButton: {
    width: 150, 
    marginLeft: 130
  },
  text: {
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginLeft: 10
  },
  resetButton: {    
    marginTop: 17,
    width: 150,
    marginLeft: 130,
    height: 40, 
    backgroundColor: '#666666',
    flex: 1,
    justifyContent: 'center', 
    padding: 2,
    //box-shadow in Android and iOS  
    elevation: 9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1.5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});

export default buttonStyles;

