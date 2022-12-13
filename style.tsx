import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#ff0000',
      borderWidth: 1
    },
  
    menuStyle:{
      flex: 1,
      alignItems: 'center',
    },

    buttonStyle:{
        flex: 1,
    },

    dishName:{
      backgroundColor: 'red',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: 50,
      padding: 10,
      textAlign: 'center',
      borderRadius: 15,
    },

    dishDescription:{
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: '#F0E68C',
      borderRadius: 10
    },
    
    header:{
      width: '100%',
      fontSize: 70,
      backgroundColor: 'yellow',
      textAlign: 'center'
    },

    backgroundMenu:{
      backgroundColor: 'black',
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 20,
      margin: 5
    },
    
    buttonAdd:{
      borderRadius: 15, 
      backgroundColor:'#34C924',
      alignItems: 'center',
      fontSize: 30,
      height: 50     
    }

  });

  export default styles;