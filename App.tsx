import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottonNavigation from './components/BottomNavigation';
import Menu from './components/Menu';
import {RootStackParamList} from './RootStackParam';



// const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () =>{
  // const ref = useNavigationContainerRef();
  
  return (
    // <>
    //   {/* <NavigationContainer ref={ref}>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //          name='BottonNavigation' 
    //          component={BottonNavigation}
    //       ></Stack.Screen>
    //       <Stack.Screen
    //          name='Menu' 
    //          component={Menu}
    //       ></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer> */}
      <BottonNavigation/> 
    // </>
  );
}

export default App;