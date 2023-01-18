import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { useAuth } from './api/service/Auth';
import BottonNavigation from './components/BottomNavigation';
import Login from './components/Login';
import Menu from './components/Menu';
import Registration from './components/Registration';
import { RootStackParamList } from './RootStackParam';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  const ref = useNavigationContainerRef();

  const { person } = useAuth();

  return (
    <>
      <NavigationContainer ref={ref}>
        {person ? (
          <BottonNavigation />
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen
              name="Registration"
              component={Registration}
            ></Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default Navigation;
