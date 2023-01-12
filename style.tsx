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
      backgroundColor: '#FFD700',
      alignContent: 'center',
      alignItems: 'center',
      fontSize: 50,
      padding: 10,
      textAlign: 'center'
    },

    dishDescription:{
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: '#F0E68C'
    },
    
    header:{
      width: '100%',
      fontSize: 70,
      backgroundColor: 'yellow',
      textAlign: 'center'
    },

    backgroundMenu:{
      borderWidth: 2,
      borderColor: '#F0E68C',
      margin: 5
    },
    
    buttonAdd:{
      backgroundColor:'#00FF00',
      alignItems: 'center',
      fontSize: 30,
      height: 50     
    }

  });

  export default styles;