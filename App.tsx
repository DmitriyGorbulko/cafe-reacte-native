import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './api/service/Auth';
import BottonNavigation from './components/BottomNavigation';
import Menu from './components/Menu';
import Navigation from './Navigation';
import { RootStackParamList } from './RootStackParam';

// const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  // const ref = useNavigationContainerRef();

  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
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

    // </>
  );
};

export default App;
